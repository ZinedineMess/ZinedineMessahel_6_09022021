'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class PhotographersHome {
    async displayPhotographers() {
        let data = await (new ApiFishEye()).getDataFishEye();
        let photographers = data.photographers;
        photographers.map(photographe => {
            const sectionPhotographers = document.getElementById('photographers');
            const articlePhotographers = document.createElement('article');
            articlePhotographers.className = 'article';
            const templatePhotographer = `
            <article class="${photographe.tags.join(' ')}">
            <a href="photographers.html?id=${photographe.id}">
                <img src="${photographe.portrait}" alt="photo de ${photographe.name}">
                <h1 class="name">${photographe.name}</h1>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul>
            </article>
            `

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        })
    }
}