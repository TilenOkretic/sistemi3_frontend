import { addClass, createElement } from '../../dom';

/**
 * 
 * @param {String} id 
 * @param {String} title 
 * @returns DIV HTML element
 */
export let createCardLoadHolder = (id, title) => {
    let cardHolder = createElement('div', id);
    addClass(cardHolder, 'w-20r');
    addClass(cardHolder, 'mx-2');
    addClass(cardHolder, 'my-2');
    addClass(cardHolder, 'on-hover');
    addClass(cardHolder, 'shadow-lg');
    addClass(cardHolder, 'border');
    addClass(cardHolder, 'border-dark');
    addClass(cardHolder, 'border-3');
    cardHolder.title = title;
    return cardHolder;
};
