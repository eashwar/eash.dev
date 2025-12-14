const fs = require('fs');
const path = require('path');

const pagesFolder = path.join(__dirname, "../pages")
const pageTemplatePath = path.join(__dirname, "../templates/page.html")
const outputFolder = path.join(__dirname, "..")

const pageTemplate = fs.readFileSync(pageTemplatePath, 'utf-8')
const pageFiles = fs.readdirSync(pagesFolder)

for (const pageFile of pageFiles) {
    const fileBasename = path.basename(pageFile, '.html')

    const content = fs.readFileSync(path.join(pagesFolder, pageFile), 'utf-8')

    const pageHtml = pageTemplate.replace(/\{\{CONTENT\}\}/g, content);

    // home.html becomes index.html, others keep their names
    const outputFilename = fileBasename === 'home' ? 'index.html' : `${fileBasename}.html`;

    fs.writeFileSync(
        path.join(outputFolder, outputFilename),
        pageHtml
    )

    console.log(`Generated ${outputFilename}`)
}
