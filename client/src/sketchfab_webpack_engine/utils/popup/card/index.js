import { addClass, createElement } from '../../dom';

export let createPopupCard = () => {
    let out = createElement('div', 'popup-card');
    addClass(out, 'd-flex');
    addClass(out, 'flex-column');
    addClass(out, 'text-center');
    addClass(out, 'align-items-center');
    return out;
};
