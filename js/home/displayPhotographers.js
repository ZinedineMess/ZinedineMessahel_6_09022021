'use strict';
////////////////////////////////////////////////////////////

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default function displayPhotographers(data) {

    data.photographers.map(photographe => {
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
                `<li class="${photographe.tags.join(' ')}" data-filter="${tag}">#${tag}</li>`).join(" ")}</ul>
            </article>
            `

        sectionPhotographers.appendChild(articlePhotographers);
        articlePhotographers.innerHTML = templatePhotographer;
    });
}