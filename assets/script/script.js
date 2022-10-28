const menuBtn = document.querySelector(".header-menu-burger-btn");
const headerMenu = document.querySelector(".header-menu")
let isOpen = false;

menuBtn.addEventListener("click", function () {
    isOpen = !isOpen;
    let headerMenu = document.querySelector(".header-menu");

    if (isOpen) {
        headerMenu.classList.add("show");
        menuBtn.classList.add("active");
        document.querySelector("body").style.overflowY = "hidden";
        // document.querySelector("body").style.paddingRight = "17px";
    } else {
        headerMenu.classList.remove("show");
        menuBtn.classList.remove("active");
        document.querySelector("body").style.overflowY = "auto";
        // document.querySelector("body").style.paddingRight = "0";
    }

})