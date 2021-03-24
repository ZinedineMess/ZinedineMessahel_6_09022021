'use strict';
/////////////////////////////////////////

export default class Lightbox {
    // LAUNCH LIGHTBOX
    launchLightBox(currentMedia, currentMediaName, currentLightboxIndex) {
        const getWorks = Array.from(document.getElementsByClassName('ph-media'));

        getWorks.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let lightBox = document.getElementById('works-lightbox');
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];

            currentLightboxIndex = index;
            lightBox.style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
    }

    // SCROLL THROUGH THE MEDIAS
    switchPhWorks(currentMedia, currentMediaName, currentLightboxIndex) {
        const previousBtn = document.querySelector('.left-arrow-lightbox');
        const nextBtn = document.querySelector('.right-arrow-lightbox');
        let lightboxMedia = document.getElementById('works-lightbox-media');
        let lightBoxName = document.getElementById('works-lightbox-name');

        previousBtn.addEventListener('click', () => {
            currentLightboxIndex -= 1;
            if (currentLightboxIndex < 0) {
                currentLightboxIndex = currentMedia.length - 1;
                currentLightboxIndex = currentMediaName.length - 1;
            }
            let src = currentMedia[currentLightboxIndex];
            let nameSrc = currentMediaName[currentLightboxIndex];

            lightboxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        });

        nextBtn.addEventListener('click', () => {
            currentLightboxIndex += 1;
            if (currentLightboxIndex > currentMediaName.length - 1) {
                currentLightboxIndex = 0;
            }
            let src = currentMedia[currentLightboxIndex];
            let nameSrc = currentMediaName[currentLightboxIndex];

            lightboxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    // CLOSE LIGHTBOX
    closeLightBox() {
        const closeBtn = document.querySelector('.close-lightbox-icon');

        closeBtn.addEventListener('click', () => {
            const lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
    }

    // LIGHTBOX KEYBOARD
    lightboxKeyboard(currentMedia, currentMediaName, currentLightboxIndex) {
        document.addEventListener('keydown', (key) => {
            // ESCAPE TO CLOSE
            if (key.code == "Escape") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';
            }

            // ARROW RIGHT TO STEP RIGHT
            else if (key.code == "ArrowRight") {
                currentLightboxIndex += 1;
                const lightboxMedia = document.getElementById('works-lightbox-media');
                const lightBoxName = document.getElementById('works-lightbox-name');

                if (currentLightboxIndex > currentMedia.length - 1) {
                    currentLightboxIndex = 0;
                }
                let src = currentMedia[currentLightboxIndex];
                let nameSrc = currentMediaName[currentLightboxIndex];

                lightboxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`
            }

            // ARROW LEFT TO STEP LEFT
            else if (key.code == "ArrowLeft") {
                currentLightboxIndex -= 1;
                const lightboxMedia = document.getElementById('works-lightbox-media');
                const lightBoxName = document.getElementById('works-lightbox-name');

                if (currentLightboxIndex < 0) {
                    currentLightboxIndex = currentMedia.length - 1;
                }
                let src = currentMedia[currentLightboxIndex];
                let nameSrc = currentMediaName[currentLightboxIndex];

                lightboxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`
            }
        });
    }
}
