import { addClass, createElement } from '../../dom';

/**
 * 
 * @returns HTML div element
 */
export let createSubElementsHolder = (id) => {
    let buttonHolder = createElement('div', `button-holder-${id}`);
    addClass(buttonHolder, 'indent');
    addClass(buttonHolder, 'mx-2');
    return buttonHolder;
};
