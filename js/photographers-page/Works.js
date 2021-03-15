'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';
import MediaFactory from '../Factory/MediaFactory.js';

export default class Works {
    async photographersWorks() {
        let data = await (new ApiFishEye()).getDataFishEye();
        let media = data.media;
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        media.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = `
                <a href='#' title="${element.photoName}">${mediaHTML.outerHTML}
                </a>
            <div class="ph-work-elt-text">
                <h2 class="ph-work-title">${element.photoName}</h2>
                <span class="ph-work-price">${element.price} €</span>
                <span class="ph-work-like">${element.likes}
                    <i class="fas fa-heart" aria-label='likes' role="button"></i></span>
            </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");
            }
        })
    }
}