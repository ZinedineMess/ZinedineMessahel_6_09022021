'use strict';
/////////////////////////////////////////

export default class Likes {
    likes() {
        const media = document.getElementById('ph-works');

        media.addEventListener('click', (e) => {
            let classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');
            let hasClassBtn = -1 != classListTarget.indexOf('heart-btn');

            if (hasClassBtn) {
                let totalLikes = parseInt(document.getElementById('total-likes').innerHTML);
                let counterLike = e.target.parentNode.parentNode.firstElementChild.firstElementChild;
                let likeValue = parseInt(counterLike.innerHTML);
                let isLiked = -1 != classListTarget.indexOf('isLiked');
                
                document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes;
                counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;

                if (isLiked) {
                    e.target.classList.remove('isLiked');
                } else {
                    e.target.classList.add('isLiked');
                }
            }
        })
    }
}
