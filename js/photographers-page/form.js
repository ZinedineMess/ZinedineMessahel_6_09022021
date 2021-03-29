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
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const form = document.getElementById('contact-form');
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

        // CHECK FIRST NAME
        function checkFirstName() {
            if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
                firstName.parentElement.setAttribute('data-error-visible', 'true');
                firstName.style.border = '2px solid #e54858';
                return false;
            }
            firstName.parentElement.setAttribute('data-error-visible', 'false');
            firstName.style.border = 'solid #279e7a 0.19rem';
            return true;
        }

        // CHECK LAST NAME
        function checkLastName() {
            if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !lastName.value.match(regex)) {
                lastName.parentElement.setAttribute('data-error-visible', 'true');
                lastName.style.border = '2px solid #e54858';
                return false;
            }
            lastName.parentElement.setAttribute('data-error-visible', 'false');
            lastName.style.border = 'solid #279e7a 0.19rem';
            return true;
        }

        // CHECK EMAIL
        function checkEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.value.trim().match(re)) {
                email.parentElement.setAttribute('data-error-visible', 'false');
                email.style.border = 'solid #279e7a 0.19rem';
                return true;
            }
            email.parentElement.setAttribute('data-error-visible', 'true');
            email.style.border = '2px solid #e54858';
            return false;
        }

        // CHECK MESSAGE
        function checkMessage() {
            if (message.value.trim() === '' || message.value.trim() == null) {
                message.parentElement.setAttribute('data-error-visible', 'true');
                message.style.border = '2px solid #e54858';
                return false;
            }
            message.parentElement.setAttribute('data-error-visible', 'false');
            message.style.border = 'solid #279e7a 0.19rem';
            return true;
        }

        // FORM FIELDS EVENTS
        function formFieldsValidation(element, method, event) {
            element.addEventListener(event, method);
        }
        formFieldsValidation(firstName, checkFirstName, 'focusout');
        formFieldsValidation(lastName, checkLastName, 'focusout');
        formFieldsValidation(email, checkEmail, 'focusout');
        formFieldsValidation(message, checkMessage, 'focusout');

        // FOR ALL FIELDS VALIDATION
        function forAllFieldsValidation() {
            checkFirstName()
            checkLastName()
            checkEmail()
            checkMessage()
        }

        function formValidation() {
            if (checkFirstName() === true &&
                checkLastName() === true &&
                checkEmail() === true &&
                checkMessage() === true) {
                return true;
            }
            return false;
        }

        // SEND FORM
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (formValidation() == true) {
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
            } else {
                forAllFieldsValidation();
            }
        });
    }
}