'use strict';
/////////////////////////////////////////

export default class Scroll {
    scrollButton() {
        const button = document.getElementById("main-photographers-link");
        const y = window.scrollY;

        if (y >= 130) {
            button.style.display = "block"
        } else {
            button.style.display = "none"
        }
    }

    scrollButtonEvent() {
        if(window) {
            window.addEventListener("scroll", this.scrollButton);
        }
    }
}