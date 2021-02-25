'use strict';
////////////////////////////////////////////////////////////

// DISPLAY PHOTOGRAPHERS PROFILS
export default function headerPhotographerProfil(data) {

    const id = window.location.search.split('id=')[1];
    const photographers = !id ? data.photographers : data.photographers.filter(photographer => photographer.id == id);
    photographers.forEach(element => {
        const sectionPhotographerProfil = document.getElementById('info-photographer-header');
        const templatePhotographerProfil = `
        <article aria-label="Photographer Profil" class="profil-photographer">
        <h2>${element.name}</h2>
        <p>${element.city}, ${element.country}</p>
        <p class="tagline">${element.tagline}</p>
        <p >${element.tags.map(tag => `<a id="cursorAdd" href="accueil.html?id=${tag}" class='tags'>#${tag}</a>`).join(" ")}</p>
        <button id="test">Contactez-moi</button>
        <img src="${element.portrait}" alt="photo de ${element.name}">
        </article>
        `
        
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
    })
}