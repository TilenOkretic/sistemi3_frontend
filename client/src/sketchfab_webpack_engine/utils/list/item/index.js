import { getImageFromImageDictionary } from '../../../dictionary/image/getters';
import { addClass, appendElementList, createElement } from '../../dom';
import { createColorImage, createColorText } from './color';
import { createListHead } from './head';

/**
 * 
 * @param {String} id 
 * @returns HTML button
 */
let createListElement = (id) => {
    let o = createElement('button', `${id}-button`);
    addClass(o, 'list-element');
    addClass(o, 'd-flex');
    addClass(o, 'flex-column');
    addClass(o, 'justify-content-center');
    addClass(o, 'align-items-center');
    addClass(o, 'bg-transparent');
    addClass(o, 'border-none');
    addClass(o, 'on-hover');
    return o;
};

/**
 * 
 * @param {String} id 
 * @param {String} type 
 * @param {String} img 
 * @param {Sketchfab API object} api - JSON object holding all application data  
 * @param {Function} itemFunction 
 * @returns fully composed list item
 */
let createListItem = (id, type = '', img = '', api, itemFunction) => {

    let listHead = createListHead(id, type);
    
    listHead.onmousedown = (event) => event.preventDefault();
    
    let listElement = createListElement(id);

    let colorImageLink = getImageFromImageDictionary(img, api);
    colorImageLink === -1 || colorImageLink === -2 ? colorImageLink = 'https://via.placeholder.com/256x256.png' : ''; 

    let colorImg = createColorImage(id, colorImageLink);

    let colorTxt = createColorText(id);

    appendElementList(listElement, colorImg, colorTxt);
    appendElementList(listHead, listElement);
    listHead.addEventListener('click', itemFunction);

    return listHead;
};


export {
    createListElement,
    createListItem,
};
