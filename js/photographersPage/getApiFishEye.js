'use strict';
////////////////////////////////////////////////////////////

import headerPhotographerProfil from './headerPhotographerProfil.js';


// FETCH API FISHEYE
export default function getApiFishEye() {
    fetch("./../Api/FishEye/photographers.json")
        .then(response => response.json())
        .then(data => {
            headerPhotographerProfil(data)
        })
        .catch(error => console.log(error))
}

