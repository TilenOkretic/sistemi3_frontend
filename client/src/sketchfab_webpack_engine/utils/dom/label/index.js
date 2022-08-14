import { createElement } from '..';

/**
 * Creates a label dom element
 * @param {String} forr - element for which this label is
 * @param {String} text - label text 
 * @returns label dom element
 */
export let createLabel = (forr, text) => {
    let l = createElement('label', 'form-label');
    l.for = forr;
    l.textContent = text;
    return l;
};
