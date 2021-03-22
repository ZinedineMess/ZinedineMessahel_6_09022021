'use strict';
/////////////////////////////////////////

import PhotographersHome from './PhotographersHome.js';

// FUNCTION FILTER TAGS
export default async function filter() {
    await (new PhotographersHome()).displayPhotographers();
    const filtres = document.querySelector('ul');
    const articles = document.querySelectorAll('.article article');

    // GET ACTIVE FILTER
    function getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    // OWN ALL FILTERS
    function ownAllFilters(article) {
        let filters = getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    // GET ACTIVE FILTER
    function refreshArticles() {
        articles.forEach(function (article) {
            if (ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // EVENT LISTENER ON CLICK LI
    filtres.addEventListener('click', event => {
        let classValue = event.target.classList.value;

        if (-1 === classValue.indexOf('actived')) {
            event.target.classList.add('actived')
        } else {
            event.target.classList.remove('actived')
        }

        refreshArticles();
    });
}

filter();
