---
---
document.getElementById("theme-switch").onclick = function() {
    console.log(document.getElementById("theme"))
    if (document.getElementById("theme").href == "{{site.url}}/styles/projects.css")
    {
        document.getElementById("theme").href = "{{site.url}}/styles/style.css"
    }
    else
    {
        document.getElementById("theme").href = "{{site.url}}/styles/projects.css"

    }
};
