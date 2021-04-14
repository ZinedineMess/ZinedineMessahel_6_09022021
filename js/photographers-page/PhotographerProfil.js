'use strict';
/////////////////////////////////////////

import {
    Form,
    FormFields
} from './form.js';

// DISPLAY PHOTOGRAPHERS PROFILS
export default class PhotographerProfil {
    async displayPhotographerProfil(data) {
        let photographersData = data.photographers;
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
        photographers.forEach(element => {
            const sectionPhotographerProfil = document.getElementById('ph-profil-header');
            const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${element.name}</h2>
                    <p class="ph-city">${element.city}, ${element.country}</p>
                    <p class="ph-tagline">${element.tagline}</p>
                    <p >${element.tags.map(tag => `<a class="ph-tags" href="index.html">#${tag}</a>`).join(" ")}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${element.alt}'><img src="${element.portrait}" alt="${element.alt}"></a>
            </article>
            `

            sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        })
        new Form().modal(photographersData);
        new FormFields().fields();
    }
}
