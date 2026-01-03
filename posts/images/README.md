# Blog Post Images

This directory contains images for blog posts.

## Directory Structure

Organize images by post slug:

```
posts/images/
├── 2025-postmortem/
│   ├── image1.jpg
│   └── image2.png
└── another-post/
    └── diagram.svg
```

## Usage in Markdown

Reference images in your blog posts using relative paths:

```markdown
![Alt text](images/2025-postmortem/image1.jpg)
```

The images will be served at `/blog/images/` on the live site.