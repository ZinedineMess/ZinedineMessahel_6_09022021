'use strict';
/////////////////////////////////////////

import Filter from './filter.js';
import Scroll from './Scroll.js';

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class HomePageBuilder {
    async displayPhotographers(data) {
        let photographers = data.photographers;
        photographers.map(photographe => {
            const sectionPhotographers = document.getElementById('photographers');
            const articlePhotographers = document.createElement('article');
            articlePhotographers.className = photographe.tags.join(' ') + ' articlePh';
            const templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul> 
            `

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        })
        new Filter().filter();
        new Scroll().scrollButtonEvent();
    }
}
