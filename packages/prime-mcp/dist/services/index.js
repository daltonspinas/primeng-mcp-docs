import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ErrorCode, ListResourcesRequestSchema, ListToolsRequestSchema, McpError, ReadResourceRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { DocumentationService } from "./documentation.js";
class PrimeNGMCPServer {
    constructor() {
        this.server = new Server({
            name: "primeng-mcp-server",
            version: "1.0.0",
        }, {
            capabilities: {
                resources: {},
                tools: {},
            },
            instructions: `<General Purpose>
              This server provides documenation for the PrimeNG UI component library for Angular.
              It can list all available PrimeNG components and provide detailed documentation for each component.
              Use the tools to explore and retrieve component information as needed.
              </General Purpose>
              <Core Workflows & Tool Guide>
* **1. Discover Available Components (Mandatory First Step):** Always begin by calling
  \`list_all_primeng_components\` to get the names and descriptions for all the components. This context is needed to interpret the user's request and discover the needed web components from PrimeNG library. The outputs from this tool are often
  required inputs for other tools.

* **2. Write & Modify Code:** Before writing or changing code, you MUST consult the
  \`get_primeng_component_docs\` tool to get the full implementation details for the given component. The request might require multiple different components, use this tool as many times as needed for each component.              
              `
        });
        this.documentationService = new DocumentationService();
        this.setupHandlers();
    }
    setupHandlers() {
        // List available tools
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: "list_all_primeng_components",
                        description: "**ALWAYS CALL THIS FIRST** - Shows all available PrimeNG components with descriptions. Returns the exact component names needed for get_primeng_component_docs. This eliminates guessing and ensures you use valid component names.",
                        inputSchema: {
                            type: "object",
                            properties: {
                                filter: {
                                    type: "string",
                                    description: "Optional filter to search components by name or functionality. Leave empty to see all components.",
                                },
                            },
                        },
                    },
                    {
                        name: "get_primeng_component_docs",
                        description: "Get complete documentation for a PrimeNG component. **Must use exact component name from list_all_primeng_components.** This will fail if you guess the component name or use incorrect capitalization.",
                        inputSchema: {
                            type: "object",
                            properties: {
                                component: {
                                    type: "string",
                                    description: "Exact component name from list_all_primeng_components (case-sensitive). Copy directly from the list to ensure accuracy.",
                                },
                            },
                            required: ["component"],
                        },
                    },
                ],
            };
        });
        // Handle tool calls
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;
            try {
                switch (name) {
                    case "list_all_primeng_components":
                        return await this.handleListAllComponents(args?.filter);
                    case "get_primeng_component_docs":
                        return await this.handleGetComponent(args?.component);
                    default:
                        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
                }
            }
            catch (error) {
                if (error instanceof McpError) {
                    throw error;
                }
                throw new McpError(ErrorCode.InternalError, `Error executing tool ${name}: ${error}`);
            }
        });
        // List resources
        this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
            const components = await this.documentationService.getAllComponents();
            return {
                resources: components.map((component) => ({
                    uri: `primeng://${component.filename}`,
                    mimeType: "text/markdown",
                    name: `PrimeNG ${component.name} component`,
                    description: component.description,
                })),
            };
        });
        // Read resources
        this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
            const { uri } = request.params;
            if (!uri.startsWith("primeng://")) {
                throw new McpError(ErrorCode.InvalidRequest, `Unsupported URI scheme: ${uri}`);
            }
            const componentName = uri.replace("primeng://", "");
            try {
                const documentation = await this.documentationService.getComponent(componentName);
                return {
                    contents: [
                        {
                            uri,
                            mimeType: "text/markdown",
                            text: documentation,
                        },
                    ],
                };
            }
            catch (error) {
                throw new McpError(ErrorCode.InvalidRequest, `Component not found: ${componentName}`);
            }
        });
    }
    async handleListAllComponents(filter) {
        const allComponents = await this.documentationService.getAllComponents();
        const results = filter
            ? await this.documentationService.searchComponents(filter)
            : allComponents;
        if (results.length === 0) {
            return {
                content: [
                    {
                        type: "text",
                        text: filter
                            ? `❌ **No PrimeNG components found matching "${filter}"**

**Try again with:** \`list_all_primeng_components\` (without filter) to see all ${allComponents.length} available components.

**Or use a broader search term** like "input", "table", "button", "dialog", etc.`
                            : "❌ **No PrimeNG components available.**",
                    },
                ],
            };
        }
        const componentList = results
            .map((comp) => `**${comp.name}** - ${comp.description || "PrimeNG component"}`)
            .join("\n");
        const headerInfo = filter
            ? `🔍 **Found ${results.length} PrimeNG component(s) matching "${filter}":**`
            : `📚 **All Available PrimeNG Components (${results.length} total):**`;
        const validNames = results.map((c) => c.name).join(", ");
        return {
            content: [
                {
                    type: "text",
                    text: `${headerInfo}

${componentList}

## 🎯 Next Step
Use \`get_primeng_component_docs\` with the **exact component name** from above.

**Valid component names:** ${validNames}

**Example:** \`get_primeng_component_docs("Button")\`

⚠️ **Important:** Component names are case-sensitive. Copy them exactly as shown above.`,
                },
            ],
        };
    }
    async handleGetComponent(componentName) {
        if (!componentName || !componentName.trim()) {
            return {
                content: [
                    {
                        type: "text",
                        text: `❌ **Component name is required**

**REQUIRED FIRST STEP:** Call \`list_all_primeng_components\` to see all available component names.

**Then:** Use \`get_primeng_component_docs\` with an exact component name from the list.

**Example workflow:**
1. \`list_all_primeng_components\` → See available components
2. \`get_primeng_component_docs("Button")\` → Get Button documentation`,
                    },
                ],
            };
        }
        try {
            const documentation = await this.documentationService.getComponent(componentName.trim());
            return {
                content: [
                    {
                        type: "text",
                        text: documentation,
                    },
                ],
            };
        }
        catch (error) {
            const allComponents = await this.documentationService.getAllComponents();
            const exactMatches = allComponents.filter((c) => c.name.toLowerCase() === componentName.toLowerCase());
            if (exactMatches.length > 0) {
                return {
                    content: [
                        {
                            type: "text",
                            text: `❌ **Component "${componentName}" not found - Case sensitivity error**

**Correct name:** "${exactMatches[0].name}"

**Try again with:** \`get_primeng_component_docs("${exactMatches[0].name}")\`

⚠️ **Component names are case-sensitive.** Use the exact capitalization from \`list_all_primeng_components\`.`,
                        },
                    ],
                };
            }
            const similarComponents = allComponents
                .filter((c) => c.name.toLowerCase().includes(componentName.toLowerCase()))
                .slice(0, 5)
                .map((c) => c.name);
            return {
                content: [
                    {
                        type: "text",
                        text: `❌ **Component "${componentName}" not found**

**SOLUTION:** Call \`list_all_primeng_components\` to see the complete list of valid component names.

**The component name must match EXACTLY** (including capitalization) from that list.

${similarComponents.length > 0
                            ? `**Did you mean:** ${similarComponents.join(", ")}?`
                            : "**Example valid names:** Button, DataTable, Calendar, Dialog, InputText"}

**Correct workflow:**
1. \`list_all_primeng_components\` → Get all valid component names
2. \`get_primeng_component_docs("ExactName")\` → Use exact name from the list`,
                    },
                ],
            };
        }
    }
    async run() {
        // Initialize the documentation service before connecting
        await this.documentationService.initialize();
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error("PrimeNG MCP Server running on stdio");
    }
}
// Start the server
const server = new PrimeNGMCPServer();
server.run().catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
});
