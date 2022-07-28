const header = document.querySelector(".header");

const changeMenu = function() {
const menu = document.querySelector(".headerContent");
    if(document.documentElement.clientWidth < 850) {
        menu.style.display = "none";
    }
    else if(document.documentElement.clientWidth > 850) {
        menu.style.display = "flex";
    }
}

window.onresize = function () {
    changeMenu();
};