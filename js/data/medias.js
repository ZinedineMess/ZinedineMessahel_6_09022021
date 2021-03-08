'use strict';
////////////////////////////////////////////////

export default class Medias {
    constructor(id, photographerId, filename, tags, likes, date, price, altText) {
        this.id = id;
        this.photographerId = photographerId;
        this.filename = filename;
        this.tags = tags;
        this.likes = likes;
        this.date = new Date(date);
        this.price = price;
        this.altText = altText;
    }
}

export class MediasList {
    constructor(media) {
        this.media = media;
    }
}