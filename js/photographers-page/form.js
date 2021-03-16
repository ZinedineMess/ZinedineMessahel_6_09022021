'use strict';
/////////////////////////////////////////

import PhotographerProfil from './PhotographerProfil.js';
import ApiFishEye from '../Data/ApiFishEye.js';

export default class Form {
    launchModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'block';
    }

    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }

    async formPhName() {
        let data = await (new ApiFishEye()).getDataFishEye();
        let photographersData = data.photographers;
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);

        photographers.forEach(element => {
            let phName = document.getElementById('ph-form-name');
            let phNameTemplate = `${element.name}`
            phName.innerHTML = phNameTemplate;
        })
    }

    async modal() {
        await (new PhotographerProfil()).displayPhotographerProfil();
        let modalBtn = document.getElementById("ph-contact");
        let closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.formPhName();
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }
}