'use strict';
/////////////////////////////////////////

import ApiFishEye from '../Data/ApiFishEye.js';

export default class Likes {
    async boxLikesAndPrice(totalLike) {
        let data = await (new ApiFishEye()).getDataFishEye();
        const photographers = data.photographers;
        const id = window.location.search.split('id=')[1];

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

    likes(totalLike) {
        const div = document.getElementById('ph-works');
        this.boxLikesAndPrice(totalLike);

        div.addEventListener('click', function (e) {
            let buttonsLike = document.querySelectorAll('.heart-btn');

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
}
