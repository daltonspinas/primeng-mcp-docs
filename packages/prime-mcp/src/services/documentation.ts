import { promises as fs } from "fs";
import * as path from "path";

export interface ComponentInfo {
  name: string;
  filename: string;
  description?: string;
}

export class DocumentationService {
  private componentsPath: string;
  private componentList: ComponentInfo[] = [];
  private componentCache = new Map<string, string>();

  constructor(componentsPath?: string) {
    // Priority: 1. Constructor param, 2. Environment variable, 3. Default relative path
    this.componentsPath =
      componentsPath ||
      process.env.COMPONENTS_PATH ||
      path.resolve(process.cwd(), "..", "prime-extract", "components");
  }

  /**
   * Initialize the service by loading the component list
   */
  async initialize(): Promise<void> {
    try {
      await this.loadComponentList();
    } catch (error) {
      console.error("Failed to initialize DocumentationService:", error);
      throw error;
    }
  }

  /**
   * Load the list of available components
   */
  private async loadComponentList(): Promise<void> {
    try {
      const files = await fs.readdir(this.componentsPath);
      this.componentList = [];

      for (const file of files.filter((f: string) => f.endsWith(".md"))) {
        const name = path.basename(file, ".md");
        const description = await this.extractComponentDescription(file);

        this.componentList.push({
          name: this.formatComponentName(name),
          filename: file,
          description,
        });
      }

      this.componentList.sort((a: ComponentInfo, b: ComponentInfo) =>
        a.name.localeCompare(b.name)
      );
    } catch (error) {
      console.error("Failed to load component list:", error);
      throw new Error(
        `Cannot access components directory: ${this.componentsPath}`
      );
    }
  }

  /**
   * Extract component description from the markdown file
   */
  private async extractComponentDescription(filename: string): Promise<string> {
    try {
      const filePath = path.join(this.componentsPath, filename);
      const content = await fs.readFile(filePath, "utf-8");

      // Extract the first paragraph after the title
      // Look for the pattern: # Title\n\nDescription paragraph
      const lines = content.split("\n");
      let titleFound = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Skip the title line (starts with #)
        if (line.startsWith("# ") && !titleFound) {
          titleFound = true;
          continue;
        }

        // Skip empty lines
        if (!line) continue;

        // If we found the title and this is not another heading or table of contents
        if (
          titleFound &&
          !line.startsWith("#") &&
          !line.toLowerCase().includes("table of contents")
        ) {
          return line;
        }
      }

      // Fallback description
      const componentName = this.formatComponentName(
        path.basename(filename, ".md")
      );
      return `${componentName} is a PrimeNG component.`;
    } catch (error) {
      console.error(`Failed to extract description for ${filename}:`, error);
      const componentName = this.formatComponentName(
        path.basename(filename, ".md")
      );
      return `${componentName} is a PrimeNG component.`;
    }
  }

  /**
   * Format component name for display (e.g., "autocomplete" -> "AutoComplete")
   */
  private formatComponentName(filename: string): string {
    // Handle special cases
    const specialCases: { [key: string]: string } = {
      autocomplete: "AutoComplete",
      animateonscroll: "AnimateOnScroll",
      autofocus: "AutoFocus",
      blockui: "BlockUI",
      cascadeselect: "CascadeSelect",
      "chart.js": "Chart.js",
      colorpicker: "ColorPicker",
      confirmdialog: "ConfirmDialog",
      confirmpopup: "ConfirmPopup",
      contextmenu: "ContextMenu",
      datepicker: "DatePicker",
      dataview: "DataView",
      dynamicdialog: "DynamicDialog",
      fieldset: "Fieldset",
      filterservice: "FilterService",
      floatlabel: "FloatLabel",
      focustrap: "FocusTrap",
      iconfield: "IconField",
      iftalabel: "IftaLabel",
      imagecompare: "ImageCompare",
      inputgroup: "InputGroup",
      inputmask: "InputMask",
      inputnumber: "InputNumber",
      inputotp: "InputOtp",
      inputtext: "InputText",
      keyfilter: "KeyFilter",
      listbox: "Listbox",
      megamenu: "MegaMenu",
      menubar: "Menubar",
      metergroup: "MeterGroup",
      multiselect: "MultiSelect",
      orderlist: "OrderList",
      orgchart: "OrgChart",
      panelmenu: "PanelMenu",
      picklist: "PickList",
      progressbar: "ProgressBar",
      progressspinner: "ProgressSpinner",
      radiobutton: "RadioButton",
      scrollpanel: "ScrollPanel",
      scrolltop: "ScrollTop",
      selectbutton: "SelectButton",
      speeddial: "SpeedDial",
      splitbutton: "SplitButton",
      styleclass: "StyleClass",
      textarea: "Textarea",
      tieredmenu: "TieredMenu",
      togglebutton: "ToggleButton",
      toggleswitch: "ToggleSwitch",
      treeselect: "TreeSelect",
      treetable: "TreeTable",
      virtualscroller: "VirtualScroller",
    };

    if (specialCases[filename.toLowerCase()]) {
      return specialCases[filename.toLowerCase()];
    }

    // Default formatting: capitalize first letter
    return filename.charAt(0).toUpperCase() + filename.slice(1);
  }

  /**
   * Get all available components
   */
  async getAllComponents(): Promise<ComponentInfo[]> {
    if (this.componentList.length === 0) {
      await this.loadComponentList();
    }
    return this.componentList;
  }

  /**
   * Search components by name or description
   */
  async searchComponents(query?: string): Promise<ComponentInfo[]> {
    const components = await this.getAllComponents();

    if (!query || !query.trim()) {
      return components;
    }

    const normalizedQuery = query.toLowerCase().trim();

    return components.filter(
      (component) =>
        component.name.toLowerCase().includes(normalizedQuery) ||
        component.filename.toLowerCase().includes(normalizedQuery) ||
        (component.description &&
          component.description.toLowerCase().includes(normalizedQuery))
    );
  }

  /**
   * Get component documentation by name (supports both formatted name and filename)
   */
  async getComponent(nameOrFilename: string): Promise<string> {
    const components = await this.getAllComponents();

    // Try to find by formatted name first, then by filename
    let component = components.find(
      (c) => c.name.toLowerCase() === nameOrFilename.toLowerCase()
    );

    if (!component) {
      // Try by filename (with and without .md extension)
      const filename = nameOrFilename.endsWith(".md")
        ? nameOrFilename
        : `${nameOrFilename}.md`;
      component = components.find(
        (c) => c.filename.toLowerCase() === filename.toLowerCase()
      );
    }

    if (!component) {
      // Try partial matching
      component = components.find(
        (c) =>
          c.name.toLowerCase().includes(nameOrFilename.toLowerCase()) ||
          c.filename.toLowerCase().includes(nameOrFilename.toLowerCase())
      );
    }

    if (!component) {
      throw new Error(
        `Component not found: ${nameOrFilename}. Available components: ${components.map((c) => c.name).join(", ")}`
      );
    }

    // Check cache first
    if (this.componentCache.has(component.filename)) {
      return this.componentCache.get(component.filename)!;
    }

    // Load from file
    try {
      const filePath = path.join(this.componentsPath, component.filename);
      const content = await fs.readFile(filePath, "utf-8");

      // Cache the content
      this.componentCache.set(component.filename, content);

      return content;
    } catch (error) {
      throw new Error(
        `Failed to load component documentation: ${component.filename}`
      );
    }
  }

  /**
   * Get component by exact filename
   */
  async getComponentByFilename(filename: string): Promise<string> {
    // Check cache first
    if (this.componentCache.has(filename)) {
      return this.componentCache.get(filename)!;
    }

    try {
      const filePath = path.join(this.componentsPath, filename);
      const content = await fs.readFile(filePath, "utf-8");

      // Cache the content
      this.componentCache.set(filename, content);

      return content;
    } catch (error) {
      throw new Error(`Failed to load component documentation: ${filename}`);
    }
  }

  /**
   * Clear the component cache
   */
  clearCache(): void {
    this.componentCache.clear();
  }

  /**
   * Get the components directory path
   */
  getComponentsPath(): string {
    return this.componentsPath;
  }

  /**
   * Set a new components directory path
   */
  setComponentsPath(newPath: string): void {
    this.componentsPath = newPath;
    this.componentList = [];
    this.clearCache();
  }
}
