'use strict';
/////////////////////////////////////////

import ApiFishEye from '../data/ApiFishEye.js';
import GalleryFactory from '../Factory/GalleryFactory.js';

export default class DropDown {
    // EVENTS
    dropDown() {
        const arrowOpen = document.getElementsByClassName('arrow-down-open');
        const arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias();
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // SORT MEDIAS (POPULARITY, DATA, TITLE)
    async sortMedias() {
        let mediaArraySort = [];
        const data = await (new ApiFishEye()).getDataFishEye();
        const media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        const sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displayMediaSort(mediaArraySort);
        }));
    }

    displayMediaSort(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
        document.getElementById("ph-works").innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}
