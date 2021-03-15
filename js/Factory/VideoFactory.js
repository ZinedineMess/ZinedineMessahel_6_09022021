'use strict';
/////////////////////////////////////////

export default class VideoFactory {

    // CREATE ELEMENT VIDEO
    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('alt', element.title);
        return eltVideo;
    }
}