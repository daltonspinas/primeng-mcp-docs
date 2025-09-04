# PrimeNG Component Documentation Extractor

A Node.js scraper tool designed to extract component documentation from the Angular 3rd party library [PrimeNG](https://primeng.org). The tool generates markdown files for each component that serve as quick in-codebase reference documentation for developers or provide implementation context to LLMs and coding assistants.

## 🎯 Purpose

This project extracts comprehensive documentation for PrimeNG components and converts them into markdown format, making it easy to:

- Access component documentation directly within your codebase
- Provide context to AI coding assistants (GitHub Copilot, etc.)
- Create offline documentation references
- Generate custom documentation sites
- Integrate component information into developer workflows

## 📦 Features

- **Complete Component Coverage**: Extracts documentation for all PrimeNG components
- **Structured Output**: Generates well-formatted markdown files with consistent structure
- **API Documentation**: Includes properties, events, methods, and templates
- **Code Examples**: Preserves implementation examples from the official documentation
- **Theming Information**: Extracts CSS classes and design tokens
- **Table Data**: Preserves API tables in markdown format

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/daltonspinas/prime-extract.git
cd prime-extract
```

2. Install dependencies:
```bash
npm install
```

### Usage

Run the scraper to extract all component documentation:

```bash
node scraper.js
```

The tool will:
1. Read the component list from `component-list.json`
2. Scrape each component's documentation from primeng.org
3. Generate markdown files in the `components/` directory

## 📁 Project Structure

```
prime-extract/
├── README.md                 # This file
├── package.json             # Node.js dependencies
├── component-list.json      # List of PrimeNG components to scrape
├── scraper.js              # Main scraper script
└── components/             # Generated markdown files
    ├── autocomplete.md
    ├── button.md
    ├── table.md
    └── ... (all PrimeNG components)
```

## 🔧 Configuration

### Component List

The `component-list.json` file contains the mapping of component names to their URL paths:

```json
[
  { "name": "AutoComplete", "path": "/autocomplete" },
  { "name": "Button", "path": "/button" },
  { "name": "Table", "path": "/table" }
]
```

To add or remove components, simply modify this file.

### Output Format

Each generated markdown file includes:

- **Component Overview**: Name and description
- **Table of Contents**: Quick navigation
- **Features Section**: Import statements and usage examples
- **API Documentation**: Properties, events, methods, templates
- **Theming**: CSS classes and design tokens
- **Code Examples**: Implementation samples

## 📖 Generated Documentation Structure

Each component markdown file follows this structure:

```markdown
# ComponentName

Brief description of the component.

## Table of Contents
- [Features](#features)
- [API](#api)
- [Theming](#theming)

## Features
### Import
### Basic Usage
### Advanced Features

## API
### Properties
### Events
### Methods
### Templates

## Theming
### CSS Classes
### Design Tokens
```

## 🔍 Example Use Cases

### Developer Reference
```bash
# Quick lookup of AutoComplete properties
cat components/autocomplete.md | grep "Property"
```

### AI Assistant Context
Include component documentation in your prompts:
```
Based on this PrimeNG Table documentation:
[paste components/table.md content]

Help me implement a data table with sorting and filtering.
```

### Documentation Site
Use the markdown files to generate custom documentation:
```javascript
// Example: Convert to HTML for documentation site
const marked = require('marked');
const fs = require('fs');

const markdown = fs.readFileSync('components/button.md', 'utf-8');
const html = marked(markdown);
```

## 🛠️ Technical Details

### Dependencies
- **axios**: HTTP client for scraping web pages
- **cheerio**: Server-side jQuery implementation for HTML parsing

### Scraping Process
1. Loads component URLs from `component-list.json`
2. Fetches HTML content from primeng.org
3. Parses DOM structure using cheerio
4. Extracts structured data (sections, tables, code blocks)
5. Converts to markdown format
6. Saves individual component files

### Data Extraction
The scraper extracts:
- Section titles and descriptions
- Code examples from `<pre><code>` blocks
- API tables (properties, events, methods)
- Theming information
- Design tokens and CSS classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test the scraper with your modifications
5. Commit your changes (`git commit -am 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This tool is designed for educational and development purposes. Always respect the terms of service of the websites you're scraping and consider the load you're placing on their servers.

## 🔗 Related Links

- [PrimeNG Official Documentation](https://primeng.org)
- [PrimeNG GitHub Repository](https://github.com/primefaces/primeng)
- [Angular Documentation](https://angular.io)
