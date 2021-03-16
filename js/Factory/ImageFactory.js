'use strict';
/////////////////////////////////////////

export default class ImageFactory {

    // CREATE ELEMENT IMG
    createHTML(element) {
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.title);
        return eltImage;
    }
}