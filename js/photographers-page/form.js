'use strict';
/////////////////////////////////////////

import PhotographerProfil from './PhotographerProfil.js';
import ApiFishEye from '../Data/ApiFishEye.js';

export class Form {
    // LAUNCH MODAL
    launchModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'block';
    }

    // CLOSE MODAL
    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }

    // DISPLAY PH NAMES IN FORM
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

export class FormFields {
    fields() {
        // DOM ELEMENTS FORM FIELDS VALIDATION
        const form = document.getElementById('contact-form');
        let firstName = document.getElementById('first-name');
        let lastName = document.getElementById('last-name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

        // SEND FORM
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let firstNameChecked = checkNames(firstName, regex);
            let lastNameChecked = checkNames(lastName, regex);
            let emailChecked = checkEmail(email);
            let messageChecked = checkMessage(message);

            function formValidation() {
                if (firstNameChecked === true &&
                    lastNameChecked === true &&
                    emailChecked === true &&
                    messageChecked === true) {
                    return true;
                }
                return false;
            }

            if (formValidation() === true) {
                firstName.style.border = 'none';
                lastName.style.border = 'none';
                email.style.border = 'none';
                message.style.border = 'none';
                console.group('Contact Message');
                console.log('Prénom : ' + firstName.value);
                console.log('Nom : ' + lastName.value);
                console.log('Email : ' + email.value);
                console.log('Message : ' + message.value);
                console.groupEnd();
                document.getElementById('contact-form').reset();
            }
        });

        function checkNames(elt, regex) {
            if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(regex)) {
                elt.parentElement.setAttribute('data-error-visible', 'true');
                elt.style.border = '2px solid #e54858';
                return false;
            } else {
                elt.parentElement.setAttribute('data-error-visible', 'false');
                elt.style.border = 'solid #279e7a 0.19rem';
                return true;
            }
        }

        function checkEmail(elt) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (elt.value.trim().match(re)) {
                elt.parentElement.setAttribute('data-error-visible', 'false');
                elt.style.border = 'solid #279e7a 0.19rem';
                return true;
            }
            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid #e54858';
            return false;
        }

        function checkMessage(elt) {
            if (elt.value.trim() === '' || elt.value.trim() == null) {
                elt.parentElement.setAttribute('data-error-visible', 'true');
                elt.style.border = '2px solid #e54858';
                return false;
            }
            elt.parentElement.setAttribute('data-error-visible', 'false');
            elt.style.border = 'solid #279e7a 0.19rem';
            return true;
        }
    }
}
