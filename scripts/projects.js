const projTypeToIcon = {
    "Music": "headphones",
    "Software": "laptop",
    "Talks": "microphone",
    "Game": "gamepad"
}

const projHTML = () => {
    fetch("/res/projects.json")
    .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    })
    .then(data => data.sort((a, b) => {
        let dateA = new Date(a.date).getTime();
        let dateB = new Date(b.date).getTime();
        return dateB - dateA;
    }))
    .then(data => data.map((project, index) => {
        let dateStringArr = project.date.split(' ');
        let dateString = `${dateStringArr[0]} ${dateStringArr[2]}`;

        return `<article class="projectWrap">
            <span class="rampart">
                <i class="fas fa-${projTypeToIcon[project.type]}"></i>
                <b>${project.type.toLowerCase()}</b>
            </span>
            <a href=${project.link}
            target="_blank"
            tabindex="${index + 5}"
            rel="noopener noreferrer" >
                <div class="project">
                    <p><b>${project.name.toLowerCase()}</b></p>
                    <p>${project.description}</p>
                </div>
            </a>
            <time datetime="${new Date(project.date).toISOString()}">${dateString.toLowerCase()}</time>
        </article>
        `;
    }))
    .then((html) => {
        document.getElementById('projects').innerHTML = html.join(' ');
    })
    .catch(console.log);
}

export { projHTML };