'use strict';
/////////////////////////////////////////

export default class DropDown {

    // OPEN DROPDOWN MENU
    openDropDown() {
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        hiddenSort[0].style.display = 'block';
    }

    // CLOSE DROPDOWN MENU
    closeDropDown() {
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        hiddenSort[0].style.display = "none";
    }

    // EVENTS
    dropDown() {
        const arrowOpen = document.getElementsByClassName('arrow-down-open');
        const arrowClose = document.getElementsByClassName('arrow-up-close');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', this.openDropDown);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', this.closeDropDown);
        }
    }
}