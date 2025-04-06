import { projHTML } from './projects.js'
import { putExtLinks } from './extLinks.js';

let routes = new Map([
    ['home', 'home.html'],
    ['projects', 'projects.html'],
    ['resume', 'resume.html'],
    ['brand', 'brand.html']
]);

const navigate = async page => {
    fetch('pages/' + page).then(res => res.text())
    .then(async html => {
        document.getElementById('root').style.opacity = 0;
        await new Promise(r => setTimeout(r, 500));
        document.getElementById('root').innerHTML = html;
        document.getElementById('root').style.opacity = 1;
    })
    .then(() => {
        let newHash = window.location.hash.substring(1);
        console.log("newhash", newHash)
        if (newHash === 'projects') {
            projHTML();
        }
        else if (newHash === '' || newHash === 'home') {
            putExtLinks();
        }
    })
    .catch(console.log);
};

const onHashChange = e => {
    let newHash = window.location.hash.substring(1);
    if (window.location.hash.length === 0)
        navigate(routes.get('home'));
    else if (routes.has(newHash))
        navigate(routes.get(newHash));
};

window.addEventListener('hashchange', onHashChange);
onHashChange('e');