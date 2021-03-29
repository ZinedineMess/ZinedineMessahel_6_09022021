'use strict';
/////////////////////////////////////////

// HOME
import HomePageBuilder from './home/HomePageBuilder.js';

// PHOTOGRAPHERS PAGES
import PhotographerProfil from './photographers-page/PhotographerProfil.js';
import DropDown from './photographers-page/DropDown.js';
import MediaBuilder from './photographers-page/MediaBuilder.js';
import Likes from './photographers-page/Likes.js';
import {
    Form,
    FormFields
} from './photographers-page/form.js';

class PagesBuilder {
    render() {
        if (window.location.pathname == '/index.html' || window.location.pathname == '/index.html#') {
            // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
            new HomePageBuilder().displayPhotographers();
        } else if (window.location.pathname == '/photographers.html') {
            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil();

            //PHOTOGRAPHER GALLERY & LIKES BOX
            new MediaBuilder().photographersMedias();

            // LIKES
            new Likes().likes();

            // DROPDOWN MENU
            new DropDown().dropDown();

            // CONTACT FORM & FORM FIELDS
            new Form().modal();
            new FormFields().fields();
        }
    }
}

new PagesBuilder().render();