'use strict';
/////////////////////////////////////////

/*
// HOME
import {} from './home/scrollButton.js';
import {} from './home/filter.js';
*/

// PHOTOGRAPHERS PAGES
import PhotographerProfil from './photographers-page/PhotographerProfil.js';
import {} from './photographers-page/dropDown.js';
import Works from './photographers-page/Works.js';
import LikesOnClick from './likes.js';

(new PhotographerProfil()).displayPhotographerProfil();
(new Works()).photographersWorks();
LikesOnClick();

