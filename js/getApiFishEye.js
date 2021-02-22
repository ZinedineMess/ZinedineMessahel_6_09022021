'use strict';
////////////////////////////////////////////////////////////

import displayDefault from './displayPhotographersDefault.js'


// FETCH API FISHEYE
export default function getApiFishEye() {
    fetch("./../ApiFishEye.json")
        .then(response => response.json())
        .then(data => {
            displayDefault(data)
        })
        .catch(error => console.log(error))
};