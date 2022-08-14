import { addClass, createElement } from '../dom';

/**
 * 
 * @returns HTML div element
 */
let createDockElement = () => {
    let e = createElement('div', `dock-item-${document.getElementsByClassName('delm').length}`);
    addClass(e, 'delm');
    addClass(e, 'p-1');
    return e;
};

export {
    createDockElement,
};
