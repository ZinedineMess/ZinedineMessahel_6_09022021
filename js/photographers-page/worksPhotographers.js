'use strict';
/////////////////////////////////////////

import ApiFishEye from '../data/ApiFishEye.js';
import MediaFactory from './../Factory.js';

export default async function photographersWorks() {
    let result = await (new ApiFishEye()).getDataFishEye();
    let media = result.media;
    const id = window.location.search.split('id=')[1];
    let imgOrVideo = (new MediaFactory());

    media.forEach(element => {
        if (id === element.photographerId) {
            const sectionPhWorks = document.getElementById('ph-works');
            const articlePhWork = document.createElement("article");
            const workTemplate = `
            <a href='#' title="${media.photoName}">
            ${(new MediaFactory())}
        </a>
        <div class="work-elt-infos">
            <h2 class="work-title">${media.photoName}</h2>
            <span class="work-price">${media.price} €</span>
            <span class="work-like">${media.likes}
                <i class="fas fa-heart" aria-label='likes' role="button"></i></span>
        </div>
            `
            articlePhWork.innerHTML = workTemplate;
            sectionPhWorks.appendChild(articlePhWork);
        }
    })
}




/*
<section id="ph-works">
    <article class="work-elt">
        <a href='#' title="${media.photoName}">
            <img src="${media.image}" alt="${media.photoName}, closedup view" role="button">
        </a>
        <div class="work-elt-infos">
            <h2 class="work-title">${media.photoName}</h2>
            <span class="work-price">${media.price} €</span>
            <span class="work-like">${media.likes}
                <i class="fas fa-heart" aria-label='likes' role="button"></i></span>
        </div>
    </article>
</section>
*/