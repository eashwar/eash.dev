const extLinks = [
    {href: "mailto:hello@eash.dev", icon: "fas fa-envelope"},
    {href: "https://linkedin.com/in/eashw", icon: "fab fa-linkedin"},
    {href: "https://github.com/eashwar", icon: "fab fa-github"},
    {href: "https://eashwar.bandcamp.com", icon: "fab fa-bandcamp"},
]

const putExtLinks = () => {
    let extLinksHtml = extLinks.map(item => {
        return `<a href="${item.href}" target="_blank" rel="noopener noreferrer"><i class="${item.icon}"></i></a>`
    });

    document.getElementById('extLinks').innerHTML = extLinksHtml.join(' ');
}

export { putExtLinks }