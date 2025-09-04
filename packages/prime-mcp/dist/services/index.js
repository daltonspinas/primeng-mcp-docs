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
                        name: "get_usage_guide",
                        description: "Get instructions on how to properly use the PrimeNG documentation tools. **ALWAYS CALL THIS FIRST** if you're unsure about the workflow.",
                        inputSchema: {
                            type: "object",
                            properties: {},
                            required: [],
                        },
                    },
                    {
                        name: "search_primeng_components",
                        description: "Search and browse all available PrimeNG components with their descriptions. **RECOMMENDED WORKFLOW: Call this FIRST to discover components, then use get_primeng_component_docs with exact component names.** Returns component names, purposes, and brief descriptions.",
                        inputSchema: {
                            type: "object",
                            properties: {
                                query: {
                                    type: "string",
                                    description: "Optional search query to filter components by name or functionality. Leave empty to get all components.",
                                },
                            },
                        },
                    },
                    {
                        name: "get_primeng_component_docs",
                        description: "Get the complete documentation for a specific PrimeNG component including API, examples, properties, methods, and styling information. **USAGE: Call search_primeng_components first to see available components, then use the exact component name from that list.**",
                        inputSchema: {
                            type: "object",
                            properties: {
                                component: {
                                    type: "string",
                                    description: "Exact component name from the search_primeng_components result (case-sensitive). Examples: 'Button', 'DataTable', 'Dialog'",
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
                    case "get_usage_guide":
                        return await this.handleGetUsageGuide();
                    case "search_primeng_components":
                        return await this.handleSearchComponents(args?.query);
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
                resources: [
                    {
                        uri: "primeng://usage-guide",
                        name: "PrimeNG MCP Usage Guide",
                        description: "Instructions for properly using the PrimeNG documentation tools",
                        mimeType: "text/markdown",
                    },
                    ...components.map((component) => ({
                        uri: `primeng://${component.filename}`,
                        mimeType: "text/markdown",
                        name: `PrimeNG ${component.name} component`,
                        description: component.description,
                    })),
                ],
            };
        });
        // Read resources
        this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
            const { uri } = request.params;
            if (!uri.startsWith("primeng://")) {
                throw new McpError(ErrorCode.InvalidRequest, `Unsupported URI scheme: ${uri}`);
            }
            if (uri === "primeng://usage-guide") {
                return {
                    contents: [
                        {
                            uri,
                            mimeType: "text/markdown",
                            text: `# PrimeNG Documentation MCP Usage Guide

## Recommended Workflow

### 1. Discovery Phase
Call \`search_primeng_components\` to see all available components:
- Without query: Get complete list of all components
- With query: Filter components by functionality or name

### 2. Selection Phase
Find the component you need from the search results.
Note the **exact component name** (case-sensitive).

### 3. Documentation Phase
Call \`get_primeng_component_docs\` with the exact component name from step 2.

## Example Usage

\`\`\`
1. search_primeng_components() → See "Button", "DataTable", "Calendar", etc.
2. get_primeng_component_docs("DataTable") → Get full DataTable documentation
\`\`\`

## Common Mistakes to Avoid

❌ **Don't guess component names** - Always use search first
❌ **Don't skip the search step** - Even if you think you know the name
❌ **Don't ignore case sensitivity** - Use exact capitalization from search results

## Pro Tips

✅ **Start broad, then narrow** - Search without query first, then with specific terms
✅ **Use exact names** - Copy component names directly from search results
✅ **Check descriptions** - Search results include brief descriptions to help choose the right component

This workflow ensures you get accurate, comprehensive documentation every time.`,
                        },
                    ],
                };
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
    async handleGetUsageGuide() {
        return {
            content: [
                {
                    type: "text",
                    text: `# PrimeNG Documentation MCP Usage Guide

## 🎯 Recommended Workflow

### 1. **Discovery Phase**
Call \`search_primeng_components\` to see all available components:
- **Without query**: Get complete list of all components
- **With query**: Filter components by functionality or name

### 2. **Selection Phase**
Find the component you need from the search results.
Note the **exact component name** (case-sensitive).

### 3. **Documentation Phase**
Call \`get_primeng_component_docs\` with the exact component name from step 2.

## 📋 Example Usage

\`\`\`
1. search_primeng_components() → See "Button", "DataTable", "Calendar", etc.
2. get_primeng_component_docs("DataTable") → Get full DataTable documentation
\`\`\`

## ❌ Common Mistakes to Avoid

- **Don't guess component names** - Always use search first
- **Don't skip the search step** - Even if you think you know the name  
- **Don't ignore case sensitivity** - Use exact capitalization from search results

## ✅ Pro Tips

- **Start broad, then narrow** - Search without query first, then with specific terms
- **Use exact names** - Copy component names directly from search results
- **Check descriptions** - Search results include brief descriptions to help choose the right component

This workflow ensures you get accurate, comprehensive documentation every time!`,
                },
            ],
        };
    }
    async handleSearchComponents(query) {
        const allComponents = await this.documentationService.getAllComponents();
        const results = query
            ? await this.documentationService.searchComponents(query)
            : allComponents;
        if (results.length === 0) {
            return {
                content: [
                    {
                        type: "text",
                        text: query
                            ? `No PrimeNG components found matching "${query}". Try a different search term or use search_primeng_components without a query to see all available components.`
                            : "No PrimeNG components available.",
                    },
                ],
            };
        }
        const componentList = results
            .map((comp) => `**${comp.name}**\n  ${comp.description || "PrimeNG component"}`)
            .join("\n\n");
        const searchInfo = query
            ? `Found ${results.length} PrimeNG component(s) matching "${query}":`
            : `All available PrimeNG components (${results.length} total):`;
        return {
            content: [
                {
                    type: "text",
                    text: `${searchInfo}\n\n${componentList}\n\n**Next step:** Use \`get_primeng_component_docs\` with the exact component name to get full documentation.

**Example:** \`get_primeng_component_docs("Button")\``,
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

**Next step:** Call \`search_primeng_components\` to see all available components, then use the exact component name from that list.

**Tip:** Use \`get_usage_guide\` for complete workflow instructions.`,
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
            const availableNames = allComponents
                .map((c) => c.name)
                .slice(0, 10)
                .join(", ");
            const totalCount = allComponents.length;
            return {
                content: [
                    {
                        type: "text",
                        text: `❌ **Component "${componentName}" not found**

**Available components** (${totalCount} total): ${availableNames}${totalCount > 10 ? ", ..." : ""}

**Recommended workflow:**
1. Call \`search_primeng_components\` to see the full list with descriptions
2. Find your component in the results
3. Use the exact component name (case-sensitive)

**Tip:** Use \`get_usage_guide\` for complete instructions.`,
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
