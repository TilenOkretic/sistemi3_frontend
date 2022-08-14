import { addClass, createElement } from '..';

export let createParagraph = (text) => {
    let out = createElement('p', 'paragraph-text');
    out.textContent = text;
    addClass(out, 'mx-1');
    return out;
};
