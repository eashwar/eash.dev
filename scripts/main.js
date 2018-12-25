---
---
document.getElementById("theme-switch").onclick = function() {
    if (document.getElementById("theme").href == "styles/dark.css")
    {
        document.getElementById("theme").href = "styles/light.css"
        Cookies.set('theme', 'light');
    }
    else
    {
        document.getElementById("theme").href = "styles/dark.css"
        Cookies.set('theme', 'dark');
    }
};
