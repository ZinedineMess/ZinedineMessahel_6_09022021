'use strict';
////////////////////////////////////////////////////////////

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default function displayDefault(data) {
    data.photographers.map(photographe => {
        const sectionPhotographers = document.getElementById('photographers');
        const articlePhotographers = document.createElement('article');
        const templatePhotographer = `
            <article class="photographer-container">
            <a href="photographers.html?id=${photographe.id}">
                <img src="${photographe.portrait}" alt="photo de ${photographe.name}">
                <h1 class="name">${photographe.name}</h1>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="tags">${photographe.tags.map(tag =>
                `<li id=${tag} class="tag individual-tags">#${tag}</li>`).join(" ")}</ul>
            </article>
            `
        sectionPhotographers.appendChild(articlePhotographers);
        articlePhotographers.innerHTML = templatePhotographer;
    });
}