const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://primeng.org';
const COMPONENT_LIST_PATH = path.join(__dirname, 'component-list.json');

function extractCodeFromElement($, element) {
    // Extract code from pre elements
    const codeBlocks = [];
    $(element).find('pre code').each((i, codeEl) => {
        const code = $(codeEl).text().trim();
        if (code) {
            codeBlocks.push(code);
        }
    });
    return codeBlocks;
}

function extractSectionContent($, section) {
    const sectionData = {
        title: '',
        description: '',
        code: []
    };

    // Extract section title
    const titleEl = $(section).find('h2.doc-section-label').first();
    if (titleEl.length) {
        sectionData.title = titleEl.text().replace('#', '').trim();
    }

    // Extract description from doc-section-description
    const descEl = $(section).find('.doc-section-description p').first();
    if (descEl.length) {
        sectionData.description = descEl.text().trim();
    }

    // Extract code examples
    sectionData.code = extractCodeFromElement($, section);

    return sectionData;
}

function extractApiTable($, table) {
    const apiData = [];
    
    // Extract table headers
    const headers = [];
    $(table).find('thead th').each((i, th) => {
        const headerText = $(th).text().trim();
        if (headerText) headers.push(headerText);
    });
    
    // Extract table rows
    $(table).find('tbody tr').each((i, tr) => {
        const row = {};
        $(tr).find('td').each((j, td) => {
            const cellText = $(td).text().trim();
            if (j < headers.length && headers[j]) {
                row[headers[j]] = cellText;
            }
        });
        if (Object.keys(row).length > 0) {
            apiData.push(row);
        }
    });
    
    return { headers, data: apiData };
}

function extractApiSection($, apiSection) {
    const apiData = {
        title: '',
        description: '',
        sections: []
    };

    // Extract main API title
    const titleEl = $(apiSection).find('.doc-intro h1').first();
    if (titleEl.length) {
        apiData.title = titleEl.text().trim();
    }

    // Extract main API description
    const descEl = $(apiSection).find('.doc-intro p').first();
    if (descEl.length) {
        apiData.description = descEl.text().trim();
    }

    // Extract subsections (Properties, Emitters, Templates, etc.)
    $(apiSection).find('app-docsection section').each((i, section) => {
        const sectionTitle = $(section).find('h2.doc-section-label').text().replace('#', '').trim();
        const sectionDesc = $(section).find('.doc-section-description p').first().text().trim();
        
        const subsection = {
            title: sectionTitle,
            description: sectionDesc,
            subsections: []
        };

        // Look for h3 subsections (like Properties, Emitters, Templates)
        $(section).find('app-docapitable').each((j, apiTable) => {
            const subTitle = $(apiTable).find('h3.doc-section-label').text().replace('#', '').trim();
            const subDesc = $(apiTable).find('.doc-section-description p').text().trim();
            
            // Extract table data
            const table = $(apiTable).find('table.doc-table').first();
            const tableData = extractApiTable($, table);
            
            subsection.subsections.push({
                title: subTitle,
                description: subDesc,
                table: tableData
            });
        });

        if (subsection.title || subsection.subsections.length > 0) {
            apiData.sections.push(subsection);
        }
    });

    return apiData;
}

function extractThemingSection($, themingSection) {
    const themingData = {
        title: '',
        description: '',
        sections: []
    };

    // Extract main theming title
    const titleEl = $(themingSection).find('.doc-intro h1').first();
    if (titleEl.length) {
        themingData.title = titleEl.text().trim();
    }

    // Extract main theming description
    const descEl = $(themingSection).find('.doc-intro p').first();
    if (descEl.length) {
        themingData.description = descEl.text().trim();
    }

    // Extract CSS Classes and Design Tokens sections
    $(themingSection).find('app-docapitable').each((i, apiTable) => {
        const sectionTitle = $(apiTable).find('h3.doc-section-label').text().replace('#', '').trim();
        const sectionDesc = $(apiTable).find('.doc-section-description p').text().trim();
        
        // Extract table data
        const table = $(apiTable).find('table.doc-table').first();
        const tableData = extractApiTable($, table);
        
        themingData.sections.push({
            title: sectionTitle,
            description: sectionDesc,
            table: tableData
        });
    });

    // Extract Built-in Presets section
    const presetsSection = $(themingSection).find('app-docstyledpreset');
    if (presetsSection.length > 0) {
        const presetsTitle = presetsSection.find('h3.doc-section-label').text().replace('#', '').trim();
        const presetsDesc = presetsSection.find('.doc-section-description p').first().text().trim();
        
        // Extract presets table
        const presetsTable = presetsSection.find('table.doc-preset-table').first();
        const presetsTableData = extractApiTable($, presetsTable);
        
        themingData.sections.push({
            title: presetsTitle,
            description: presetsDesc,
            table: presetsTableData
        });
    }

    return themingData;
}

async function scrapeComponents() {
    // Load component list
    const componentList = JSON.parse(fs.readFileSync(COMPONENT_LIST_PATH, 'utf-8'));

    // Ensure output directory exists
    const outDir = path.join(__dirname, 'components');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    for (const comp of componentList) {
        const url = BASE_URL + comp.path;
        try {
            console.log(`Scraping ${comp.name} from ${url}...`);
            const { data: compData } = await axios.get(url);
            const $ = cheerio.load(compData);

            let markdown = '';

            // Extract main documentation container
            const docMain = $('.doc-main');
            if (!docMain.length) {
                console.log(`No doc-main found for ${comp.name}, trying alternative selectors...`);
                continue;
            }

            // Extract title and intro
            const docIntro = docMain.find('.doc-intro').first();
            let title = comp.name;
            let intro = '';
            
            if (docIntro.length) {
                title = docIntro.find('h1').text().trim() || comp.name;
                intro = docIntro.find('p').text().trim();
            }

            // Add title
            markdown += `# ${title}\n\n`;
            
            if (intro) {
                markdown += `${intro}\n\n`;
            }

            // Extract feature documentation sections
            const docSections = docMain.find('app-docsection section');

            // Collect section information for TOC
            const sections = [];
            const hasFeatures = docSections.length > 0;
            const hasApi = $('app-docapisection').length > 0;
            const hasTheming = $('app-docthemingsection').length > 0;

            if (hasFeatures) sections.push({ name: 'Features', anchor: '#features' });
            if (hasApi) sections.push({ name: 'API', anchor: '#api' });
            if (hasTheming) sections.push({ name: 'Theming', anchor: '#theming' });

            // Add Table of Contents if we have multiple sections
            if (sections.length > 1) {
                markdown += `## Table of Contents\n\n`;
                sections.forEach(section => {
                    markdown += `- [${section.name}](${section.anchor})\n`;
                });
                markdown += '\n';
            }
            
            if (docSections.length > 0) {
                markdown += `## Features {#features}\n\n`;
                
                docSections.each((i, section) => {
                    const sectionData = extractSectionContent($, section);
                    
                    if (sectionData.title) {
                        // Create anchor-friendly ID from title
                        const anchorId = sectionData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        markdown += `### ${sectionData.title} {#${anchorId}}\n\n`;
                        
                        if (sectionData.description) {
                            markdown += `${sectionData.description}\n\n`;
                        }
                        
                        // Add code examples
                        sectionData.code.forEach((code, codeIndex) => {
                            const language = code.includes('<') ? 'html' : 
                                           code.includes('import') ? 'typescript' : 'text';
                            markdown += `\`\`\`${language}\n${code}\n\`\`\`\n\n`;
                        });
                    }
                });
                
                // Add back to top link
                if (sections.length > 1) {
                    markdown += `[↑ Back to Top](#table-of-contents)\n\n`;
                }
            } else {
                console.log(`No documentation sections found for ${comp.name}`);
                // Fallback: extract any available content
                const fallbackTitle = $('h1').first().text().trim() || comp.name;
                const fallbackDesc = $('p').first().text().trim();
                if (fallbackDesc) {
                    markdown += `## Features {#features}\n\n${fallbackDesc}\n\n`;
                }
            }

            // Extract API documentation
            const apiSection = $('app-docapisection');
            if (apiSection.length > 0) {
                console.log(`Found API section for ${comp.name}`);
                const apiData = extractApiSection($, apiSection);
                
                if (apiData.title) {
                    markdown += `## API {#api}\n\n`;
                    markdown += `### ${apiData.title}\n\n`;
                    
                    if (apiData.description) {
                        markdown += `${apiData.description}\n\n`;
                    }
                    
                    // Process API sections
                    apiData.sections.forEach(section => {
                        if (section.title) {
                            const anchorId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            markdown += `#### ${section.title} {#api-${anchorId}}\n\n`;
                            if (section.description) {
                                markdown += `${section.description}\n\n`;
                            }
                        }
                        
                        // Process subsections (Properties, Emitters, etc.)
                        section.subsections.forEach(subsection => {
                            if (subsection.title) {
                                const anchorId = subsection.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                                markdown += `##### ${subsection.title} {#api-${anchorId}}\n\n`;
                                if (subsection.description) {
                                    markdown += `${subsection.description}\n\n`;
                                }
                                
                                // Add table data
                                if (subsection.table && subsection.table.data.length > 0) {
                                    // Create markdown table
                                    const headers = subsection.table.headers;
                                    if (headers.length > 0) {
                                        markdown += `| ${headers.join(' | ')} |\n`;
                                        markdown += `| ${headers.map(() => '---').join(' | ')} |\n`;
                                        
                                        subsection.table.data.forEach(row => {
                                            const cells = headers.map(header => row[header] || '');
                                            markdown += `| ${cells.join(' | ')} |\n`;
                                        });
                                        markdown += '\n';
                                    }
                                }
                            }
                        });
                    });
                }
                
                // Add back to top link
                if (sections.length > 1) {
                    markdown += `[↑ Back to Top](#table-of-contents)\n\n`;
                }
            } else {
                console.log(`No API section found for ${comp.name}`);
            }

            // Extract Theming documentation
            const themingSection = $('app-docthemingsection');
            if (themingSection.length > 0) {
                console.log(`Found Theming section for ${comp.name}`);
                const themingData = extractThemingSection($, themingSection);
                
                if (themingData.title || themingData.sections.length > 0) {
                    markdown += `## Theming {#theming}\n\n`;
                    
                    if (themingData.title) {
                        markdown += `### ${themingData.title}\n\n`;
                    }
                    
                    if (themingData.description) {
                        markdown += `${themingData.description}\n\n`;
                    }
                    
                    // Process theming sections (CSS Classes, Design Tokens, Built-in Presets)
                    themingData.sections.forEach(section => {
                        if (section.title) {
                            const anchorId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            markdown += `#### ${section.title} {#theming-${anchorId}}\n\n`;
                            if (section.description) {
                                markdown += `${section.description}\n\n`;
                            }
                            
                            // Add table data
                            if (section.table && section.table.data.length > 0) {
                                // Create markdown table
                                const headers = section.table.headers;
                                if (headers.length > 0) {
                                    markdown += `| ${headers.join(' | ')} |\n`;
                                    markdown += `| ${headers.map(() => '---').join(' | ')} |\n`;
                                    
                                    section.table.data.forEach(row => {
                                        const cells = headers.map(header => row[header] || '');
                                        markdown += `| ${cells.join(' | ')} |\n`;
                                    });
                                    markdown += '\n';
                                }
                            }
                        }
                    });
                }
                
                // Add back to top link
                if (sections.length > 1) {
                    markdown += `[↑ Back to Top](#table-of-contents)\n\n`;
                }
            } else {
                console.log(`No Theming section found for ${comp.name}`);
            }

            // Add source link and quick navigation
            markdown += `---\n\n`;
            
            // Add quick navigation section
            if (sections.length > 1) {
                markdown += `## Quick Navigation\n\n`;
                markdown += `**Jump to Section:**\n`;
                sections.forEach(section => {
                    markdown += `- [${section.name}](${section.anchor})\n`;
                });
                markdown += '\n';
            }
            
            markdown += `[View Official Documentation](${url})\n`;

            // Write to markdown file
            const filename = comp.name.toLowerCase().replace(/\s+/g, '');
            fs.writeFileSync(path.join(outDir, `${filename}.md`), markdown);
            console.log(`✓ Wrote ${filename}.md`);
            
            // Add small delay to be respectful to the server
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (err) {
            console.error(`✗ Failed to scrape ${comp.name} at ${url}:`, err.message);
        }
    }
}

scrapeComponents().catch(console.error);