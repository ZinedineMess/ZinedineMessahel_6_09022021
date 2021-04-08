'use strict';
/////////////////////////////////////////

// FUNCTION FILTER TAGS
export default class Filter {
    // FILTER TAGS
    filter() {
        const filtres = document.querySelector('ul');
        const articles = document.querySelectorAll('.articlePh');

        // EVENT LISTENER ON CLICK LI
        filtres.addEventListener('click', event => {
            let classValue = event.target.classList.value;

            if (-1 === classValue.indexOf('actived')) {
                event.target.classList.add('actived')
            } else {
                event.target.classList.remove('actived')
            }

            this.refreshArticles(articles);
        });
    }

    // GET ACTIVE FILTER
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    // OWN ALL FILTERS
    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    // SHOW OR HIDE ARTICLES
    refreshArticles(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
}
