import { projHTML } from './projects.js'

let routes = new Map([
    ['home', 'home.html'],
    ['projects', 'projects.html'],
    ['resume', 'resume.html'],
]);

const navigate = page => {
    fetch('pages/' + page).then(res => res.text())
    .then(html => {document.getElementById('root').innerHTML = html;})
    .then(() => {
        if (window.location.hash.substr(1) === 'projects')
            projHTML();
        else if (window.location.hash.substr(1) === 'resume')
            PDFObject.embed("/res/resume.pdf", "#resumeContainer", {
                fallbackLink: '<p>This browser does not support inline PDFs. <a href="[url]">Download resume here.</a></p>',
                height: "100%",
                width: "80%",
            });
    })
    .catch(console.log);
};

const onHashChange = e => {
    let newHash = window.location.hash.substr(1);
    if (window.location.hash.length === 0)
        navigate(routes.get('home'));
    else if (routes.has(newHash))
        navigate(routes.get(newHash));
};

window.addEventListener('hashchange', onHashChange);
onHashChange('e');