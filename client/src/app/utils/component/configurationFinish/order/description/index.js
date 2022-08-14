import { addClass, createElement } from '../../../../../../sketchfab_webpack_engine/utils/dom';

export let createOrderDescription = (text) => {
    let desc = createElement('p', 'order-description');
    addClass(desc, 'text-uppercase');
    desc.innerHTML = text;
    return desc;
};
