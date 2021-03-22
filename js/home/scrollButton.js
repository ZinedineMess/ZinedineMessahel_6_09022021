'use strict';
/////////////////////////////////////////

// SCROLL FUNCTION
export default function scrollButton() {
    const button = document.getElementById("main-photographers_link");
    const y = window.scrollY;

    if (y >= 130) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
};

window.addEventListener("scroll", scrollButton);
