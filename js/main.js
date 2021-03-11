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
import photographersWorks from './photographers-page/worksPhotographers.js';

(new PhotographerProfil()).displayPhotographerProfil();
photographersWorks();
