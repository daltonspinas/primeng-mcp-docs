export interface ComponentInfo {
    name: string;
    filename: string;
    description?: string;
}
export declare class DocumentationService {
    private componentsPath;
    private componentList;
    private componentCache;
    constructor(componentsPath?: string);
    /**
     * Initialize the service by loading the component list
     */
    initialize(): Promise<void>;
    /**
     * Load the list of available components
     */
    private loadComponentList;
    /**
     * Extract component description from the markdown file
     */
    private extractComponentDescription;
    /**
     * Format component name for display (e.g., "autocomplete" -> "AutoComplete")
     */
    private formatComponentName;
    /**
     * Get all available components
     */
    getAllComponents(): Promise<ComponentInfo[]>;
    /**
     * Search components by name or description
     */
    searchComponents(query?: string): Promise<ComponentInfo[]>;
    /**
     * Get component documentation by name (supports both formatted name and filename)
     */
    getComponent(nameOrFilename: string): Promise<string>;
    /**
     * Get component by exact filename
     */
    getComponentByFilename(filename: string): Promise<string>;
    /**
     * Clear the component cache
     */
    clearCache(): void;
    /**
     * Get the components directory path
     */
    getComponentsPath(): string;
    /**
     * Set a new components directory path
     */
    setComponentsPath(newPath: string): void;
}
