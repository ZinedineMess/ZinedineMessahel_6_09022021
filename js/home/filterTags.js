'use strict';
////////////////////////////////////////////////////////////

document.addEventListener('click', function (e) {

    const button = e.target;

    // FILTER THE TAG
    const filter = button.getAttribute('data-filter');
    const tag = button.getAttribute('data-filter-tag');
    filterTag(filter, tag);
})

// FILTER TAG
function filterTag(filter, tag) {
    const items = document.querySelectorAll('.' + filter + ' > article');

    for (let i = 0; i < items.length; i++) {
        const itemTags = items[i].getAttribute('data-tags');

        // CATCH CASE WITH NO TAGS
        if (itemTags != null) {
            if (itemTags.indexOf(tag) < 0) {
                items[i].setAttribute('data-toggle', 'off');
            }
        }
    }
}

// ADD ACTIVE CLASS TO TAGS
function addActiveClass() {

    const buttons = document.querySelectorAll("nav li");

    buttons.forEach(btn => btn.addEventListener("click", () => {
        btn.classList.add('active');
    }));
}
addActiveClass();