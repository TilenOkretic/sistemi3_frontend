import { getLoadingSVG } from './assets/svg/loading';
import { addClass, createElement, removeDom } from './dom';

/**
 * 
 * @param {DOMElment} API_FRAME 
 */
let hideLoadingGif = (API_FRAME) => {
    let wrapper = document.querySelector('#dock-wrapper');
    document.querySelector('#loading-bar').remove();
    wrapper.style.display = '';
    API_FRAME.style.opacity = 1;
};

/**
 * 
 * @returns HTML div element
 */
let createLoadSvgHolder = () => {
    let svgDom = createElement('div', 'loading-svg-holder');
    addClass(svgDom, 'position-absolute'); 
    addClass(svgDom, 'w-4r'); 
    addClass(svgDom, 'h-auto'); 
    addClass(svgDom, 'top-0');
    addClass(svgDom, 'start-50');
    addClass(svgDom, 'translate-middle-x');
    addClass(svgDom, 'bg-transparent-white');
    return svgDom;
};

/**
 * Creates and show the loading animation
 */
let showLoading = () => {
    let loadHolder = createLoadSvgHolder();
    let loadSvg = getLoadingSVG();

    loadHolder.innerHTML += (loadSvg);

    document.querySelector('#app').appendChild(loadHolder);
};

/**
 * Hides and removes the loading animation
 */
let hideLoading = () => {
    removeDom('loading-svg-holder');
};

export {
    hideLoadingGif,
    showLoading,
    hideLoading,
};
