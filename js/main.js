'use strict';
/////////////////////////////////////////

// DATA
import ApiFishEye from './data/ApiFishEye.js';

// HOMEPAGE
import HomePageBuilder from './home/HomePageBuilder.js';

// PH PAGES
import PhotographerProfil from './photographers-page/PhotographerProfil.js';
import DropDown from './photographers-page/dropDown.js';
import MediaBuilder from './photographers-page/MediaBuilder.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {
            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data);

            // DROPDOWN MENU
            new DropDown().dropDown(data);

            //PHOTOGRAPHER GALLERY & LIKES BOX
            new MediaBuilder().photographersMedias(data);

        } else {
            // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
            new HomePageBuilder().displayPhotographers(data);
        }
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
