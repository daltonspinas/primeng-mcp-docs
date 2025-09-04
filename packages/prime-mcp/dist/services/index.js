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
                        name: "search_components",
                        description: "Search PrimeNG components by query and return all available components",
                        inputSchema: {
                            type: "object",
                            properties: {
                                query: {
                                    type: "string",
                                    description: "Search query for components",
                                },
                            },
                            required: ["query"],
                        },
                    },
                    {
                        name: "get_component",
                        description: "Get complete documentation for a specific PrimeNG component",
                        inputSchema: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    description: "Name of the PrimeNG component",
                                },
                            },
                            required: ["name"],
                        },
                    },
                    {
                        name: "list_all_components",
                        description: "List all available PrimeNG components",
                        inputSchema: {
                            type: "object",
                            properties: {},
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
                    case "search_components":
                        return await this.handleSearchComponents(args?.query);
                    case "get_component":
                        return await this.handleGetComponent(args?.name);
                    case "list_all_components":
                        return await this.handleListAllComponents();
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
    async handleSearchComponents(query) {
        const results = await this.documentationService.searchComponents(query);
        return {
            content: [
                {
                    type: "text",
                    text: `Found ${results.length} PrimeNG components matching "${query}":\n\n${results.map((comp) => `- **${comp.name}** (${comp.filename})`).join("\n")}\n\nUse get_component() to fetch specific component documentation.`,
                },
            ],
        };
    }
    async handleGetComponent(name) {
        try {
            const documentation = await this.documentationService.getComponent(name);
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
            throw new McpError(ErrorCode.InvalidRequest, `Component not found: ${name}`);
        }
    }
    async handleListAllComponents() {
        const components = await this.documentationService.getAllComponents();
        return {
            content: [
                {
                    type: "text",
                    text: `All available PrimeNG components (${components.length} total):\n\n${components.map((comp) => `- **${comp.name}** (${comp.filename})`).join("\n")}`,
                },
            ],
        };
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
