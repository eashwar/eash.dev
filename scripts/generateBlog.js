const marked = require('marked');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const postsFolder = path.join(__dirname, "../posts")
const blogPostTemplatePath = path.join(__dirname, "../templates/blog-post.html")
const blogListingTemplatePath = path.join(__dirname, "../templates/blog-listing.html")
const blogPostOutputFolder = path.join(__dirname, "../blog")
const pagesFolder = path.join(__dirname, "../pages")

const parseFrontmatter = (content) => {
    const parsedContent = content.match(/^---([\s\S]*)---\n([\s\S]*)$/)

    if(!parsedContent) {
        throw new Error("error finding frontmatter");
    }

    const frontmatter = yaml.load(parsedContent[1]);
    const markdown = parsedContent[2];

    return {frontmatter, markdown}
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}

if (!fs.existsSync(blogPostOutputFolder))
{
    fs.mkdirSync(blogPostOutputFolder, {recursive: true})
}

const postList = []
const blogPostTemplate = fs.readFileSync(blogPostTemplatePath, 'utf-8')
const blogListingTemplate = fs.readFileSync(blogListingTemplatePath, 'utf-8')
const markdownFiles = fs.readdirSync(postsFolder)

for (const markdownFile of markdownFiles) {

    const fileBasename = path.basename(markdownFile, '.md')

    const content = fs.readFileSync(path.join(postsFolder, markdownFile), 'utf-8')

    const {frontmatter, markdown} = parseFrontmatter(content)

    const parsedMarkdown = marked.parse(markdown)

    const parsedDate = formatDate(frontmatter.date)

    postList.push({
        title: frontmatter.title,
        date: parsedDate,
        link: fileBasename // join with "blog/" to actually link
    })

    const postHtml = blogPostTemplate
        .replaceAll(/\{\{TITLE\}\}/g, frontmatter.title)
        .replaceAll(/\{\{TIMESTAMP\}\}/g, parsedDate)
        .replace(/\{\{BODY\}\}/g, parsedMarkdown);

    fs.writeFileSync(
        path.join(blogPostOutputFolder, `${fileBasename}.html`),
        postHtml
    )
}

postList.sort((a, b) => new Date(b.date) - new Date(a.date));

const postItemsHtml = postList.map((post, idx) => {
    return `<li class="blog-list-item">
        <time datetime="${new Date(post.date).toISOString()}"
                class="text-secondary-orange labrada">
            ${formatDate(post.date)}:
        </time>
        <a href="/blog/${post.link}.html" tabindex="${idx + 5}">
            <b>${post.title.toLowerCase()}</b>
        </a>
    </li>`
}).join('\n')

const blogListingHtml = blogListingTemplate
    .replaceAll(/\{\{BODY\}\}/g, postItemsHtml)

fs.writeFileSync(
    path.join(pagesFolder, 'blog.html'),
    blogListingHtml
)