'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';

// DISPLAY PHOTOGRAPHERS PROFILS
export default class PhotographerProfil {
    async displayPhotographerProfil() {
        let data = await (new ApiFishEye()).getDataFishEye();
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
                <img src="${element.portrait}" alt="${element.alt}">
            </article>
            `

            sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        })
    }
}
