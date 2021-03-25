'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';
import MediaFactory from '../Factory/MediaFactory.js';
import Lightbox from './LightBox.js';

export default class DropDown {
    // SORT MEDIAS
    async sortMedias() {
        let mediaArraySort = [];
        const data = await (new ApiFishEye()).getDataFishEye();
        const media = data.media;
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentLightboxIndex = 0;
        let currentMedia = [];
        let currentMediaName = [];
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        const sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {

            if (index == 0) {
                btnSort.innerHTML = `Popularité`;
                hiddenSort[0].style.display = "none";
                // SORT BY POPULARITY  
                mediaArraySort = media.sort((a, b) => {
                    return b.likes - a.likes
                })


            } else if (index == 1) {
                btnSort.innerHTML = `Date`;
                hiddenSort[0].style.display = "none";
                // SORT BY DATE 
                mediaArraySort = media.sort((a, b) => {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;
                hiddenSort[0].style.display = "none";
                // SORT BY TITLE
                mediaArraySort = media.sort((a, b) => {
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }

            // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
            document.getElementById("ph-works").innerHTML = "";
            let totalLike = [];
            mediaArraySort.forEach(element => {
                if (id == element.photographerId) {
                    let sectionPhWorks = document.getElementById('ph-works');
                    let articlePhWork = document.createElement("article");
                    let mediaHTML = mediaFactory.renderMedia(element);
                    let workTemplate = `
                    ${mediaHTML.outerHTML}
                    <div class="ph-work-elt-text">
                        <h2 class="ph-work-title">${element.photoName}</h2>
                        <span class="ph-work-price">${element.price} €</span>
                        <div class='ph-elt-like'>
                        <span class="ph-work-like">
                            <a class="like-counter">${element.likes}</a>
                        </span>
                        <button class="btn-like" type="button">
                            <i class="fas fa-heart btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                        </button>
                        </div>
                    </div>
                    `

                    articlePhWork.innerHTML = workTemplate;
                    sectionPhWorks.appendChild(articlePhWork);
                    articlePhWork.classList.add("ph-work-elt");
                    totalLike += parseInt(element.likes);
                    currentMedia.push(mediaHTML.outerHTML);
                    currentMediaName.push(element.photoName);
                    (new Lightbox()).launchLightBox(currentMedia, currentMediaName, currentLightboxIndex);
                    (new Lightbox()).switchPhWorks(currentMedia, currentMediaName, currentLightboxIndex);
                    (new Lightbox()).closeLightBox();
                    (new Lightbox()).lightboxKeyboard(currentMedia, currentMediaName, currentLightboxIndex);
                }
            })
        }));
    }

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
}
