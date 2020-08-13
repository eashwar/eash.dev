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

        return `<article class="smallProjWrap">
            <span>${project.type === "Music" ? '<i class="fas fa-headphones"></i>' : (project.type === "Software" ? '<i class="fas fa-laptop"></i>' : '<i class="fas fa-microphone"></i>')} <b>${project.type.toLowerCase()}</b></span>
            <a href=${project.link}
            target="_blank"
            tabindex="${index + 5}"
            rel="noopener noreferrer" >
                <div class="smallProj">
                    <p class="smallProjTitle">${project.name.toLowerCase()}</p>
                    <p class="smallProjDescr">${project.description}</p>
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