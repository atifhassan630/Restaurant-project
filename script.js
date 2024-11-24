// JavaScript to toggle the visibility of the menu section
function toggleMenu() {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-toggle");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.textContent = "View Our Menu";
    } else {
        menu.style.display = "block";
        button.textContent = "Hide Menu";
    }
}
