const extLinks = [
    {href: "mailto:eash@eash.dev", icon: "fa-solid fa-envelope"},
    {href: "https://github.com/eashwar", icon: "fa-brands fa-github"},
    {href: "https://bsky.app/profile/eash.dev", icon: "fa-brands fa-bluesky"},
    {href: "https://linkedin.com/in/eashw", icon: "fa-brands fa-linkedin"}
]
// test
const putExtLinks = () => {
    let extLinksHtml = extLinks.map(item => {
        return `<a href="${item.href}" target="_blank" rel="noopener noreferrer"><i class="${item.icon}"></i></a>`
    });

    document.getElementById('extLinks').innerHTML = extLinksHtml.join(' ');
}

export { putExtLinks }
