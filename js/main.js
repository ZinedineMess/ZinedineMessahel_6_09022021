'use strict';
/////////////////////////////////////////

// HOME
import {} from './home/scrollButton.js';
import {} from './home/filter.js';

// PHOTOGRAPHERS PAGES
import PhotographerProfil from './photographers-page/PhotographerProfil.js';
import DropDown from './photographers-page/DropDown.js';
import Works from './photographers-page/Works.js';
import Form from './photographers-page/form.js';

// PHOTOGRAPHER PROFIL HEADER
(new PhotographerProfil()).displayPhotographerProfil();

// PHOTOGRAPHER GALLERY & LIKES
(new Works()).photographersWorks();

// DROPDOWN MENU
(new DropDown()).dropDown();

// CONTACT FORM
(new Form()).modal();
