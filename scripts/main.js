---
---
document.getElementById("theme-switch").onclick = function() {
    console.log(document.getElementById("theme"))
    if (document.getElementById("theme").href == "{{site.url}}/styles/dark.css")
    {
        document.getElementById("theme").href = "{{site.url}}/styles/light.css"
    }
    else
    {
        document.getElementById("theme").href = "{{site.url}}/styles/dark.css"

    }
};
