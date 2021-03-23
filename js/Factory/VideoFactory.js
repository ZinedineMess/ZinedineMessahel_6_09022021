'use strict';
/////////////////////////////////////////

export default class VideoFactory {

    // CREATE ELEMENT VIDEO
    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('alt', element.title);
        eltVideo.setAttribute('type', 'video/mp4');
        eltVideo.className = 'ph-media';

        return eltVideo;
    }
}
