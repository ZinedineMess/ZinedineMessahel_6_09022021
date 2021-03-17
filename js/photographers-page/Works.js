'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';
import MediaFactory from '../Factory/MediaFactory.js';

export default class Works {
    async photographersWorks() {
        let data = await (new ApiFishEye()).getDataFishEye();
        let media = data.media;
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        media.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = `
                <a href='#' title="${element.photoName}">${mediaHTML.outerHTML}
                </a>
            <div class="ph-work-elt-text">
                <h2 class="ph-work-title">${element.photoName}</h2>
                <span class="ph-work-price">${element.price} €</span>
                <div class='ph-elt-like'>
                <span id="ph-work-like">
                    <a class="like-counter" data-value="${element.likes}">${element.likes}</a>
                </span>
                <button class="btn-like" type="button">
                    <i class="fas fa-heart" aria-label='likes' role="button"></i>
                </button>
                </div>
            </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");
            }
        })
    }

    async boxLikesAndPrice() {
        await this.photographersWorks();
        const box = document.getElementById('box');
        const boxTemplate = `
        <span id="total-likes">#
            <i class="fas fa-heart" aria-label="likes"></i>
        </span>
        <span># / jour</span>
        `
        box.innerHTML = boxTemplate;
    }

    async incrementLikes() {
        await this.photographersWorks();
        const heartBtnLike = document.getElementsByClassName('btn-like');
        const counter = document.querySelector('.like-counter');

        for (let i = 0; i < heartBtnLike.length; i++) {
            let likes = 88;
            let isLike = false;

            if (heartBtnLike) {
                heartBtnLike[i].addEventListener('click', () => {

                    if (!isLike) {
                        likes++;
                        counter.innerHTML = likes;
                        isLike = true;
                    } else {
                        likes--;
                        counter.innerHTML = likes;
                        isLike = false;
                    }
                })
            } else {
                console.log('erreur');
            }
        }
    }
}
