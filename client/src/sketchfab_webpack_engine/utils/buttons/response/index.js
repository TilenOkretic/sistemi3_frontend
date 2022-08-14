// TODO: move to boat configurator and/ or make a abstract response button
import { openConfiguratorMenu } from '../../configurationMenu/open';
import { addClass, createElement } from '../../dom';

/**
 * 
 * @param {String} textContent 
 * @param {DOMElement} popupHolder 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns HTML button element
 */
export let createValidResponseButton = (textContent, popupHolder, api) => {
    let b = createElement('button', 'vr-btn');
    addClass(b, 'bg-transparent');
    addClass(b, 'border');
    addClass(b, 'border-none');
    addClass(b, 'on-hover');
    addClass(b, 'text-uppercase');
    addClass(b, 'button-hover');
    addClass(b, 'my-1');
    b.textContent = textContent;

    b.addEventListener('click', () => {
        openConfiguratorMenu(api);
        popupHolder.remove();
    });
    return b;
};
