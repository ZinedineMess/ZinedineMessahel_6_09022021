"use strict";
////////////////////////////////////////////////////////////
import Photographer from './photographers.js';
import Medias from './medias.js';

export default class ApiFishEye {
    async getDataFishEye() {
        let url = './../Api/FishEye/photographers.json';
        let response = await fetch(url);
        const data = await response.json();

        const instPhotographers = [];
        const instMedias = [];

        for (let dataPhotographer of data.photographers) {
            const instPhotographer = new Photographer(
                dataPhotographer.id,
                dataPhotographer.name,
                dataPhotographer.city,
                dataPhotographer.country,
                dataPhotographer.tags,
                dataPhotographer.tagline,
                dataPhotographer.price,
                dataPhotographer.portrait
            );

            instPhotographers.push(instPhotographer);
        }

        for (let dataMedia of data.media) {
            const dataMediaFilename =
                "image" in dataMedia ?
                dataMedia.image :
                dataMedia.video;

            const instMedia = new Medias(
                dataMedia.id,
                dataMedia.photographerId,
                dataMediaFilename,
                dataMedia.tags,
                dataMedia.likes,
                dataMedia.date,
                dataMedia.price,
                dataMedia.altText
            );

            instMedias.push(instMedia);
        }

        return {
            photographers: new PhotographersList(instPhotographers),
            media: new MediasList(instMedias)
        }
    }
}