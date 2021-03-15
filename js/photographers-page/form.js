'use strict';
/////////////////////////////////////////

import PhotographerProfil from './PhotographerProfil.js';

export default class Form {
    launchModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'block';
    }

    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }

    async modal() {
        await (new PhotographerProfil()).displayPhotographerProfil();
        let modalBtn = document.getElementById("ph-contact");
        let closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }
}