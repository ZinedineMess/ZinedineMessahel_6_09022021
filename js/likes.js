'use strict';
/////////////////////////////////////////

import Works from './photographers-page/Works.js';

export default async function LikesOnClick(){
    await new Works().photographersWorks();
    const heartLike = Array.from(document.getElementsByClassName('ph-work-like'));
    console.log(heartLike);
}
