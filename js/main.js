'use strict';
/////////////////////////////////////////

// HOME
import HomePageBuilder from './home/HomePageBuilder.js';

// PHOTOGRAPHERS PAGES
import PhotographerProfil from './photographers-page/PhotographerProfil.js';
import DropDown from './photographers-page/dropDown.js';
import MediaBuilder from './photographers-page/MediaBuilder.js';
import Likes from './photographers-page/likes.js';

(function appDispatch() {
    if (window.location.pathname === "/ZinedineMessahel_6_09022021/" || window.location.pathname === "/ZinedineMessahel_6_09022021/index.html") {
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers();
    } else if (window.location.pathname === "/ZinedineMessahel_6_09022021/photographers.html") {
        // PHOTOGRAPHER PROFIL HEADER
        new PhotographerProfil().displayPhotographerProfil();

        //PHOTOGRAPHER GALLERY & LIKES BOX
        new MediaBuilder().photographersMedias();

        // LIKES
        new Likes().likes();

        // DROPDOWN MENU
        new DropDown().dropDown();
    }
})();
