"use strict";
////////////////////////////////////////////////////////////

import {
    getApiFishEyeHome,
    getApiFishEyePhotographersPage
} from './getApiFishEye.js';
import scrollButton from './home/scrollButton.js';
import {} from './home/filterTags.js';

getApiFishEyeHome();
getApiFishEyePhotographersPage();
scrollButton();