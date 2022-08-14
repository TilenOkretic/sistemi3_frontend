import { addClass, createElement, removeClass } from '../../sketchfab_webpack_engine/utils/dom';
import { errorLog } from '../logger';

/**
 * 
 * @param {String} listName 
 * @returns HTML unorganized list
 */
let createHTMLList = (listName) => {
    let out = createElement('ul', listName);
    out.className = 'color-list';
    addClass(out, 'd-flex');
    addClass(out, 'flex-wrap');
    addClass(out, 'color-list');
    addClass(out, 'p-0');
    return out;
};

/**
 * Hides the list DOM element
 * @param {Sting | DOMElement} listRef - reference to the list element
 */
let closeHTMLList = (listRef) => {
    if(!listRef) errorLog('No valid list reference');

    let list = typeof listRef == 'string' ? document.querySelector(`#${listRef}`) : listRef;
    removeClass(list, 'd-flex');
    addClass(list, 'd-none');
};

let openHTMLList = (listRef) => {
    if(!listRef) errorLog('No valid list reference');

    let list = typeof listRef == 'string' ? document.querySelector(`#${listRef}`) : listRef;    
    removeClass(list, 'd-none');
    addClass(list, 'd-flex');
};

export {
    createHTMLList,
    closeHTMLList,
    openHTMLList,
};
