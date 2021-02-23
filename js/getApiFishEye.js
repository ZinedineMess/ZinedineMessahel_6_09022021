'use strict';
////////////////////////////////////////////////////////////

import displayPhotographers from './displayPhotographers.js';


// FETCH API FISHEYE
export default function getApiFishEye() {
    fetch("./../Api/FishEye/photographers.json")
        .then(response => response.json())
        .then(data => {
            displayPhotographers(data)
        })
        .catch(error => console.log(error))
}