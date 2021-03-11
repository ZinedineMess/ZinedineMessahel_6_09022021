class ImageFactory {
    constructor() {
        this.src = image;
        this.alt = alt;
        this.id = id;
        this.type = "image";
    }

    // CREATE ELEMENT IMG
    createEltImg(imgSrc, imgAlt) {
        let eltImage = document.createElement('img');
        fillEltImg(eltImage, imgSrc, imgAlt);

        return eltImage;
    }

    // FILL ELEMENT IMG
    fillEltImg(eltImage, imgSrc, imgAlt) {
        eltImage.setAttribute('src', imgSrc);
        eltImage.setAttribute('alt', imgAlt);

        return eltImage;
    }

    // CREATE FULL ELEMENT IMAGE
    createFullElt() {
        let eltImage = createEltImg(`images/${this.src}`, this.alt);
        eltImage.setAttribute("id", "current-media-lightbox");

        return eltImage;
    }

}

class VideoFactory {
    constructor() {
        this.src = video;
        this.alt = alt;
        this.id = id;
        this.type = "video";
    }

    // CREATE ELEMENT VIDEO
    createEltVideo(videoSrc, videoAlt) {
        let eltVideo = document.createElement('video');
        fillEltImg(eltVideo, videoSrc, videoAlt);

        return eltVideo;
    }

    // FILL ELEMENT VIDEO
    fillEltVideo(eltVideo, videoSrc, videoAlt) {
        eltVideo.setAttribute('src', videoSrc);
        eltVideo.setAttribute('alt', videoAlt);

        return eltVideo;
    }

    // CREATE FULL ELEMENT VIDEO
    createFullElt() {
        let eltVideo = createEltVideo(`videos/${this.src}`, this.alt);
        eltVideo.setAttribute("id", "current-media-lightbox");

        return eltVideo;
    }
}

export default class MediaFactory {
    constructor(type) {
        if (type === "image") return new ImageFactory();
        if (type === "video") return new VideoFactory();
    }
}