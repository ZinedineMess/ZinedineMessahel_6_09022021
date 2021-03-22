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
        let totalLike = 0;
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
                <span class="ph-work-like">
                    <a class="like-counter">${element.likes}</a>
                </span>
                <button class="btn-like" type="button">
                    <i class="fas fa-heart btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                </button>
                </div>
            </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");
                totalLike += parseInt(element.likes);
            }
        })

        function boxLikesAndPrice(data, id, totalLike) {
            const photographers = data.photographers;

            photographers.forEach(element => {
                if (id == element.id) {
                    let box = document.getElementById('box');
                    let boxTemplate = `
                    <span id="total-likes">${totalLike}  <i class="fas fa-heart" aria-label='likes'></i>
                    </span>
                    <span>${element.price} €/ jour</span>
                    `
                    box.innerHTML = boxTemplate;
                }
            })
        }

        function likes(totalLike) {
            const div = document.getElementById('ph-works');
            boxLikesAndPrice(data, id, totalLike);

            div.addEventListener('click', function (e) {
                let buttonsLike = document.querySelectorAll('.btn');

                buttonsLike.forEach(function (btn) {
                    let totalLikes = document.getElementById('total-likes');
                    let initElem = e.target;
                    let likeValue = initElem.dataset.value;
                    let likesCounter = initElem.parentNode.parentNode.firstElementChild;
                    let classValue = btn.classList.value.split(' ');
                    let classTarget = e.target.classList.value.split(' ');
                    let intersection = classTarget.filter(x => classValue.includes(x));

                    if (intersection) {
                        likeValue++;
                        totalLike++;
                        likesCounter.innerHTML = likeValue;
                        totalLikes.innerHTML = totalLike + ` <i class="fas fa-heart" aria-label='likes'></i>`;
                    }
                })
            })
        }
        likes(totalLike);
    }
}
