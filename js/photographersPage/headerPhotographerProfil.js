'use strict';
////////////////////////////////////////////////////////////

// DISPLAY PHOTOGRAPHERS PROFILS
export default function headerPhotographerProfil(data) {

    const id = window.location.search.split('id=')[1];
    const photographers = !id ? data.photographers : data.photographers.filter(photographer => photographer.id == id);
    photographers.forEach(element => {
        const sectionPhotographerProfil = document.getElementById('ph-profil-header');
        const templatePhotographerProfil = `
        <article aria-label="Photographer Profil" class="ph-profil">
            <div class='ph-infos'>
                <h2>${element.name}</h2>
                <p class="ph-city">${element.city}, ${element.country}</p>
                <p class="ph-tagline">${element.tagline}</p>
                <p >${element.tags.map(tag => `<a class="ph-tags" href="index.html?id=${tag}">#${tag}</a>`).join(" ")}</p>
            </div>
            <button id="ph-contact">Contactez-moi</button>
            <img src="${element.portrait}" alt="photo de ${element.name}">
        </article>
        `
        
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
    })
}