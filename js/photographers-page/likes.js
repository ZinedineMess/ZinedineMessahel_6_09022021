'use strict';
/////////////////////////////////////////

import Works from './Works.js';

export default class Likes {

    likes(totalLike) {
        const div = document.getElementById('ph-works');
        (new Works()).boxLikesAndPrice(totalLike);
        let isLike = false;

        div.addEventListener('click', (e) => {
            let buttonsLike = document.querySelectorAll('.heart-btn');

            buttonsLike.forEach((btn) => {
                let initElem = e.target;
                let likesCounter = initElem.parentNode.parentNode.firstElementChild;
                let likeValue = initElem.dataset.value;

                if (initElem === btn) {
                    if (!isLike) {
                        likeValue++;
                        // totalLike++;
                        likesCounter.innerHTML = likeValue;
                        // totalLikes.innerHTML = totalLike + ` <i class="fas fa-heart" aria-label='likes'></i>`;
                        isLike = true;
                    } else {
                        likeValue--;
                        // totalLike++;
                        likesCounter.innerHTML = likeValue;
                        // totalLikes.innerHTML = totalLike + ` <i class="fas fa-heart" aria-label='likes'></i>`;
                        isLike = false;
                    }

                }
            })
        })
    }
}
