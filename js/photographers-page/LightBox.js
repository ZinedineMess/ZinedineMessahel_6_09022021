export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    init(currentMedia, currentMediaName) {
        const getMedias = Array.from(document.getElementsByClassName('ph-media'));
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;

            document.getElementById('works-lightbox').style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
        this.previous(currentMedia, currentMediaName);
        this.next(currentMedia, currentMediaName);
        this.close();
        return this
    }

    previous(currentMedia, currentMediaName) {
        let prevBtn = document.querySelector('.left-arrow-lightbox');
        prevBtn.addEventListener('click', () => {
            this.currentIndex -= 1;
            const lightBoxMedia = document.getElementById('works-lightbox-media');
            const lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex < 0) {
                this.currentIndex = currentMedia.length - 1;
                this.currentIndex = currentMediaName.length - 1;
            }

            let src = currentMedia[this.currentIndex];
            let nameSrc = currentMediaName[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    next(currentMedia, currentMediaName) {
        let nextBtn = document.querySelector('.right-arrow-lightbox');
        nextBtn.addEventListener('click', () => {
            this.currentIndex += 1;
            const lightBoxMedia = document.getElementById('works-lightbox-media');
            const lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex > currentMediaName.length - 1) {
                this.currentIndex = 0;
            }

            let src = currentMedia[this.currentIndex];
            let nameSrc = currentMediaName[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            const lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
    }

    keyboard() {
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