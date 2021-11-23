"use strict";
//this file is for making Mobile device specific adjustments for better viewing
let navBar = document.getElementById("navBar");
let changeToMobileNavbar = () => {
    if (/Android|iPhone/i.test(navigator.userAgent) || (window.innerWidth < 992)) {
        navBar.style.backgroundColor = "#262626";
    }
    else {
        navBar.style.backgroundColor = "";
    }
};
window.onresize = () => {
    changeToMobileNavbar();
};
//main
changeToMobileNavbar();
//# sourceMappingURL=adjust_for_mobile.js.map