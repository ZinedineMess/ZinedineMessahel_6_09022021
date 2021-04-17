'use strict';
/////////////////////////////////////////

export default class Scroll {
    scrollButton() {
        window.addEventListener("scroll", () => {
            let button = document.getElementById("main-photographers-link");
            let y = window.scrollY;

            if (y >= 130) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    }
}
