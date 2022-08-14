import { addClass, createElement } from '../../../dom';

/**
 * 
 * @param {String} id 
 * @param {String} type 
 * @returns HTML list item
 */
export let createListHead = (id, type) => {
    let lh = createElement('li', `${id}`);
    lh.className = `color-item ${type}`;
    addClass(lh, 'd-flex');
    addClass(lh, 'flex-column');
    addClass(lh, 'w-7r');
    addClass(lh, 'pt-25r');
    return lh;
};
