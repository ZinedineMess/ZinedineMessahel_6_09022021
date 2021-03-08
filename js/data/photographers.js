'use strict';
////////////////////////////////////////////////

export default class Photographer {
    constructor(id, name, city, country, tags, tagline, price, portrait) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tags = tags.sort();
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }
}

export class PhotographersList {
    constructor(photographers) {
        this.photographers = photographers;
    }
}