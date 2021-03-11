'use strict';
/////////////////////////////////////////

import ApiFishEye from '../data/ApiFishEye.js';
import MediaFactory from './../Factory.js';

export default async function photographersWorks() {
    let result = await (new ApiFishEye()).getDataFishEye();
    let media = result.media;
    console.log(media);
    const id = window.location.search.split('id=')[1];
    console.log(id);

    media.forEach(element => {
        if (id == element.photographerId) {
            let sectionPhWorks = document.getElementById('ph-works');
            let articlePhWork = document.createElement("article");
            let workTemplate = `
            <a href='#' title="${element.photoName}">${new MediaFactory(element.image, element.video)}
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