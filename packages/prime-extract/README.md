# PrimeNG Component Documentation Extractor

A Node.js tool and library to extract component documentation from the Angular 3rd party library [PrimeNG](https://primeng.org). Generates markdown files for each component, providing quick in-codebase reference documentation for developers or implementation context for LLMs and coding assistants.

## 📦 Installation

Install via npm:

```bash
npm install prime-extract
```

or with yarn:

```bash
yarn add prime-extract
```

## 🚀 Usage

You can use `prime-extract` as a CLI tool or as a Node.js library.

### CLI

Extract all component documentation to the `components/` directory:

```bash
npx prime-extract
```

Or, if installed globally:

```bash
prime-extract
```

#### CLI Options

- `--output <dir>`: Specify output directory (default: `components/`)
- `--components <file>`: Path to component list JSON (default: built-in list)

### Node.js API

```js
const { extractAll } = require('prime-extract');

await extractAll({
  outputDir: './components',
  componentList: [
    { name: 'AutoComplete', path: '/autocomplete' },
    { name: 'Button', path: '/button' },
    // ...add or customize components
  ]
});
```

#### API

- `extractAll(options)`
  - `outputDir` (string): Directory to write markdown files
  - `componentList` (array): List of `{ name, path }` objects (optional)

## ✨ Features

- **Complete Component Coverage**: Extracts documentation for all PrimeNG components
- **Structured Output**: Well-formatted markdown files with consistent structure
- **API Documentation**: Includes properties, events, methods, and templates
- **Code Examples**: Preserves implementation examples from the official documentation
- **Theming Information**: Extracts CSS classes and design tokens
- **Table Data**: Preserves API tables in markdown format

## 📖 Output Format

Each generated markdown file includes:

- **Component Overview**: Name and description
- **Table of Contents**: Quick navigation
- **Features Section**: Import statements and usage examples
- **API Documentation**: Properties, events, methods, templates
- **Theming**: CSS classes and design tokens
- **Code Examples**: Implementation samples

Example structure:

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

- **Developer Reference**: Quickly look up component properties and usage.
- **AI Assistant Context**: Provide component docs to LLMs or Copilot.
- **Documentation Site**: Use markdown files as a source for custom docs.

## 🛠️ Technical Details

- **axios**: HTTP client for scraping web pages
- **cheerio**: Server-side jQuery implementation for HTML parsing

The extraction process:
1. Loads component URLs (default or custom list)
2. Fetches HTML from primeng.org
3. Parses DOM with cheerio
4. Extracts structured data (sections, tables, code blocks)
5. Converts to markdown
6. Writes individual component files

## 🤝 Contributing

Pull requests and issues are welcome! Please open an issue or PR for bugs, improvements, or new features.

## 📝 License

MIT

## ⚠️ Disclaimer

This tool is for educational and development purposes. Respect the terms of service of the websites you scrape and consider server load.

## 🔗 Related Links

- [PrimeNG Official Documentation](https://primeng.org)
- [PrimeNG GitHub Repository](https://github.com/primefaces/primeng)
- [Angular Documentation](https://angular.io)
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
