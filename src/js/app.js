import {initMap} from './map.js';
import {nav} from './nav.js';
import {carousel} from './carousel.js';

window.initMap = initMap;
document.addEventListener('DOMContentLoaded', function () {
    nav();
    carousel();
})