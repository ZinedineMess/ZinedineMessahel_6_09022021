'use strict';
/////////////////////////////////////////

import MediaFactory from '../Factory/MediaFactory.js';
import Lightbox from './LightBox.js';

export default class WorksBuilder {
    works(element) {
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentLightboxIndex = 0;
        let currentMedia = [];
        let currentMediaName = [];
        let totalLike = [];
    
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
            currentMedia.push(mediaHTML.outerHTML);
            currentMediaName.push(element.photoName);
            totalLike += parseInt(element.likes);
            (new Lightbox()).launchLightBox(currentMedia, currentMediaName, currentLightboxIndex);
            (new Lightbox()).switchPhWorks(currentMedia, currentMediaName, currentLightboxIndex);
            (new Lightbox()).closeLightBox();
            (new Lightbox()).lightboxKeyboard(currentMedia, currentMediaName, currentLightboxIndex);
        }
    }
}

