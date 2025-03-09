//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Load saved preferences
    const fontSize = getCookie("fontsize") || "16px";
    const fontColor = getCookie("fontcolor") || "#000000";

    document.documentElement.style.setProperty("--fontsize", fontSize);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    
    document.getElementById("fontsize").value = parseInt(fontSize);
    document.getElementById("fontcolor").value = fontColor;
});

document.getElementById("fontForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let fontSize = document.getElementById("fontsize").value + "px";
    let fontColor = document.getElementById("fontcolor").value;
    
    document.documentElement.style.setProperty("--fontsize", fontSize);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    
    setCookie("fontsize", fontSize, 365);
    setCookie("fontcolor", fontColor, 365);
});

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
