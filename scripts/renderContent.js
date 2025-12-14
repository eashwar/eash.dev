const fs = require('fs');
const path = require('path');

const projTypeToIcon = {
    "Music": "headphones",
    "Software": "laptop",
    "Talks": "microphone",
    "Game": "gamepad"
};

const extLinks = [
    {href: "mailto:eash@eash.dev", icon: "fa-solid fa-envelope"},
    {href: "https://linkedin.com/in/eashw", icon: "fa-brands fa-linkedin"},
    {href: "https://github.com/eashwar", icon: "fa-brands fa-github"},
    {href: "https://bsky.app/profile/eash.dev", icon: "fa-brands fa-bluesky"}
];

function generateProjectsHtml() {
    const projectsPath = path.join(__dirname, '../res/projects.json');
    const projectsData = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));

    const sortedProjects = projectsData.sort((a, b) => {
        let dateA = new Date(a.date).getTime();
        let dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });

    const projectsHtml = sortedProjects.map((project, index) => {
        let dateStringArr = project.date.split(' ');
        let dateString = `${dateStringArr[0]} ${dateStringArr[2]}`;

        return `<article class="project-outer">
            <span class="technotot text-secondary-orange">
                <i class="fas fa-${projTypeToIcon[project.type]}"></i>
                <b>${project.type.toLowerCase()}</b>
            </span>
            <a href=${project.link}
            target="_blank"
            tabindex="${index + 5}"
            rel="noopener noreferrer" >
                <div class="project bg-gradient-partial">
                    <p><b>${project.name.toLowerCase()}</b></p>
                    <p>${project.description}</p>
                </div>
            </a>
            <time datetime="${new Date(project.date).toISOString()}" class="technotot text-secondary-orange">${dateString.toLowerCase()}</time>
        </article>
        `;
    });

    return projectsHtml.join(' ');
}

function generateExtLinksHtml() {
    const extLinksHtml = extLinks.map(item => {
        return `<a href="${item.href}" target="_blank" rel="noopener noreferrer"><i class="${item.icon}"></i></a>`
    });

    return extLinksHtml.join(' ');
}

module.exports = { generateProjectsHtml, generateExtLinksHtml };
