---
---

document.getElementById("theme-switch").onclick = function() {
    if (document.getElementById("theme").href == "{{site.url}}/styles/dark.css")
    {
        document.getElementById("theme").href = "{{site.url}}/styles/light.css"
        Cookies.set('theme', 'light');
    }
    else
    {
        document.getElementById("theme").href = "{{site.url}}/styles/dark.css"
        Cookies.set('theme', 'dark');
    }
};

window.onload = function() {
    var prevTheme = Cookies.get('theme');
    if (typeof prevTheme != "undefined")
    {
        document.getElementById("theme").href = "{{site.url}}/styles/" + prevTheme + ".css"
    }
};
