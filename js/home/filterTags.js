"use strict"
////////////////////////////////////////////////////////////////////

window.addEventListener("load", (event) => {
    const filtres = document.querySelector('nav');
    const articles = document.querySelectorAll('.article article');

    function getFiltresActifs() {
        let currentFilters = document.querySelectorAll('nav li.actived');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    function possedeTousLesFiltres(article) {
        let filters = getFiltresActifs();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    function refreshArticles() {
        articles.forEach(function (article) {
            if (possedeTousLesFiltres(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    filtres.addEventListener('click', event => {
        let classValue = event.target.classList.value;

        if (-1 === classValue.indexOf('actived')) {
            event.target.classList.add('actived')
        } else {
            event.target.classList.remove('actived')
        }

        refreshArticles();
    });

});
