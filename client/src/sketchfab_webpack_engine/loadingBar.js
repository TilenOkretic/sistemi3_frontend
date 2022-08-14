import { addClass, createElement } from './utils/dom';
import { setAnimation, setAnimationIterationCount } from './animations/setters';
import { validateString } from './utils/validation';
import { getImageFromImageDictionary } from './dictionary/image/getters';

/**
 * Creates a loading gif DOM element and puts it on the page
 * @returns resolved promise
 */
let createLoadingGif = (api) => new Promise((resolve) => {

    let loadingBar = createLoadingGifDiv();
    let loadGif = createLoadingGifImg(process.env.LOADING_GIF_PATH, api);
    let loadSpan = createLoadingGifSpan();

    loadingBar.appendChild(loadGif);
    loadingBar.appendChild(document.createElement('br'));
    loadingBar.appendChild(loadSpan);

    setAnimation(loadGif, 'popOut', '2000ms', 'ease-in-out');
    setAnimationIterationCount(loadGif, 'infinite');

    document.querySelector('#app').appendChild(loadingBar);
    
    resolve(true);
});

/**
 * DIV holder for the loading gif
 * @returns DOM elment
 */
let createLoadingGifDiv = () => {
    let lb = createElement('div', 'loading-bar');
    addClass(lb, 'd-flex');
    addClass(lb, 'flex-column');
    addClass(lb, 'justify-content-center');
    addClass(lb, 'align-items-center');
    addClass(lb, 'position-absolute');
    return lb;
};

/**
 * 
 * @param {String} gif 
 * @returns img dom element
 */
let createLoadingGifImg = (gif, api) => {
    validateString(gif);
    let lbi = document.createElement('img');
    let imgDicRef = getImageFromImageDictionary(gif, api);
    lbi.src = imgDicRef != -2 && imgDicRef != -1 ? imgDicRef : gif ?  gif.toString() : 'https://via.placeholder.com/256x256.png';
    lbi.alt = 'logoRevel-gif';
    return lbi;
};

/**
 * 
 * @returns span dom element
 */
let createLoadingGifSpan = () => {
    let lbs = createElement('span', 'loading-span');
    addClass(lbs, 'loading-span');
    return lbs;
};

export default createLoadingGif;
