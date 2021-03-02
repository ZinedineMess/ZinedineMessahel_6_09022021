"use strict";
////////////////////////////////////////////////////////////

import displayPhotographers from './home/displayPhotographers.js';
import headerPhotographerProfil from './photographersPage/headerPhotographerProfil.js';

// FETCH API FISHEYE HOMEPAGE
export function getApiFishEyeHome() {
    
    fetch("./../Api/FishEye/photographers.json")
        .then(response => response.json())
        .then(data => {
            displayPhotographers(data)
        })
        .catch(error => console.log(error))
}


// FETCH API FISHEYE PHOTOGRAPHERS PAGES
export function getApiFishEyePhotographersPage() {
    fetch("./../Api/FishEye/photographers.json")
        .then(response => response.json())
        .then(data => {
            headerPhotographerProfil(data)
        })
        .catch(error => console.log(error))
}
