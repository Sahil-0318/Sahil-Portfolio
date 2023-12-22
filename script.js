let navBtn = document.querySelector(".ham-burger-icon",".fa-solid");
let navBtnX = document.querySelector(".fa-xmark");
let mobileNav = document.querySelector("#mobile-nav");
let mode = "show";

navBtn.addEventListener("click", () => {
    if (mode==="show"){
        mode="hide";
        mobileNav.classList.add("show-nav");
        mobileNav.classList.remove("hide-nav");
    }
});

navBtnX.addEventListener("click", () => {
    if (mode==="hide"){
        mode="show";
        mobileNav.classList.add("hide-nav");
        mobileNav.classList.remove("show-nav");
    }
});