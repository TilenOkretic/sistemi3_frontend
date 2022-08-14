
import { getImageFromImageDictionary } from '../../dictionary/image/getters';
import { getTranslation } from '../../languages/getters';
import { addClass, createElement, removeClass } from '../dom';
import { clearSelection, showSelection } from '../selection';

let selectUnselectButtonFunction = (out, event) => {
    if (out.classList.contains('bold') || out.id == 'rts-btn') {
        if (event.target.id != out.id && event.target.parentElement.id != out.id) {
            clearSelection(out);
        }
    } else {
        showSelection(out);
    }
};

/**
 * 
 * @param {String} id - button id
 * @param {String} img - image key 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns html button element
 */
export let createHTMLButton = (id, img, api) => {
    id = id.toString();
    let out = createElement('button', id);
    addClass(out, 'p-1');
    addClass(out, 'bg-transparent');
    addClass(out, 'border-dark');
    addClass(out, 'm-1');
    addClass(out, 'on-hover');

    let text = createElement('p', `${id}-paragraph`);
    text.textContent = getTranslation(api, id);
    addClass(text, 'm-0');
    addClass(text, 'text-capitalize');
    
    removeClass(out, 'on-hover');
    let ico = createElement('img', `${id}-img`);
    
    if (!img) {
        ico.src = 'https://via.placeholder.com/256x256.png';
    } else {
        ico.src = getImageFromImageDictionary(img, api);
    }
    
    // get img form img dictionary
    ico.style.backgroundSize = '100%';

    // width and height styling
    addClass(ico, 'w-4r');
    addClass(ico, 'min-width-4r');
    addClass(ico, 'h-4r');
    addClass(ico, 'border');
    addClass(ico, 'border-2');
    addClass(ico, 'border-dark');

    // margin styling
    addClass(ico, 'mx-1');

    // special css class for buttons with images
    addClass(out, 'd-flex');
    addClass(out, 'align-items-center');

    out.appendChild(ico);
    

    out.onmousedown = (event) => event.preventDefault();
    out.appendChild(text);

    out.addEventListener('click', (event) => selectUnselectButtonFunction(out, event));

    return out;
};
