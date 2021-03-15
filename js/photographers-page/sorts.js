'use strict';
/////////////////////////////////////////

let popular = document.getElementById('sort-Popular');
let date = document.getElementById('sort-Date');
let title = document.getElementById('sort-Title');

let data = await (new ApiFishEye()).getDataFishEye();
let media = data.media;
