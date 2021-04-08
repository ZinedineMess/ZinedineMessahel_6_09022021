'use strict';
/////////////////////////////////////////

export default class VideoFactory {

    // CREATE ELEMENT VIDEO
    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';

        return eltVideo;
    }
}
