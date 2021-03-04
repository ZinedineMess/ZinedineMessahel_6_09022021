"use strict";
/////////////////////////////////////////////////////////////

// SCROLL FUNCTION
export const button = document.getElementById("main-photographers_link");

const scrollButton = () => {
    const y = window.scrollY;
    if (y >= 130) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
};

window.addEventListener("scroll", scrollButton);

export default scrollButton;