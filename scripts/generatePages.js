const fs = require('fs');
const path = require('path');
const { generateProjectsHtml, generateExtLinksHtml } = require('./renderContent.js');

const pagesFolder = path.join(__dirname, "../pages")
const pageTemplatePath = path.join(__dirname, "../templates/page.html")
const outputFolder = path.join(__dirname, "..")

const pageTemplate = fs.readFileSync(pageTemplatePath, 'utf-8')
const pageFiles = fs.readdirSync(pagesFolder)

const pageContentMap = {
    'home': {
        '{{EXT_LINKS}}': generateExtLinksHtml()
    },
    'projects': {
        '{{PROJECTS}}': generateProjectsHtml()
    }
};

for (const pageFile of pageFiles) {
    const fileBasename = path.basename(pageFile, '.html')

    let content = fs.readFileSync(path.join(pagesFolder, pageFile), 'utf-8')

    if (pageContentMap[fileBasename]) {
        for (const [placeholder, htmlContent] of Object.entries(pageContentMap[fileBasename])) {
            content = content.replace(placeholder, htmlContent);
        }
    }

    const pageHtml = pageTemplate.replace(/\{\{CONTENT\}\}/g, content);

    // home.html becomes index.html, others keep their names
    const outputFilename = fileBasename === 'home' ? 'index.html' : `${fileBasename}.html`;

    fs.writeFileSync(
        path.join(outputFolder, outputFilename),
        pageHtml
    )

    console.log(`Generated ${outputFilename}`)
}
