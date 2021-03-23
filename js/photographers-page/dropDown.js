'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';
import MediaFactory from '../Factory/MediaFactory.js';

export default class DropDown {

    // OPEN DROPDOWN MENU
    openDropDown() {
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        hiddenSort[0].style.display = 'block';
    }

    // CLOSE DROPDOWN MENU
    closeDropDown() {
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        hiddenSort[0].style.display = "none";
    }

    // SORT MEDIAS
    async sortMedias() {
        let mediaArraySort = [];
        const data = await (new ApiFishEye()).getDataFishEye();
        const media = data.media;
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        const sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {

            if (index == 0) {
                // SORT BY POPULARITY  
                mediaArraySort = media.sort((a, b) => {
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                // SORT BY DATE 
                mediaArraySort = media.sort((a, b) => {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
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
            mediaArraySort.forEach(element => {
                if (id == element.photographerId) {
                    let sectionPhWorks = document.getElementById('ph-works');
                    let articlePhWork = document.createElement("article");
                    let mediaHTML = mediaFactory.renderMedia(element);
                    let totalLike = 0;
                    let workTemplate = `
                    <a href='#' title="${element.photoName}">${mediaHTML.outerHTML}
                    </a>
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
                }
            })
        }));
    }

    // EVENTS
    dropDown() {
        const arrowOpen = document.getElementsByClassName('arrow-down-open');
        const arrowClose = document.getElementsByClassName('arrow-up-close');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', this.openDropDown);
            this.sortMedias();
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', this.closeDropDown);
        }
    }
}
