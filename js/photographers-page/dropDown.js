"use strict"
////////////////////////////////////////////////////////

// DOM ELEMENTS
const arrowClose = document.getElementsByClassName('arrow-up-close');
const arrowOpen = document.getElementsByClassName('arrow-down-open');

// OPEN DROPDOWN MENU
function openDropDown() {
    let hiddenSort = document.getElementsByClassName('hidden-sort');

    hiddenSort[0].style.display = "block";
}

// CLOSE DROPDOWN MENU
function closeDropDown() {
    let hiddenSort = document.getElementsByClassName('hidden-sort');

    hiddenSort[0].style.display = "none";
}

// EVENTS
arrowOpen[0].addEventListener('click', openDropDown);
arrowClose[0].addEventListener('click', closeDropDown);