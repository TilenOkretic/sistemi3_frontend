import { addClass, createElement } from '../../dom';
import { createPopupCard } from '../card';
import { createPopupForm } from '../form';

let createPopupHolder = () => {
    let out = createElement('div', 'popup-holder');
    addClass(out, 'bg-white');
    addClass(out, 'p-2');
    addClass(out, 'border');
    addClass(out, 'border-dark');
    addClass(out, 'position-absolute');
    return out;
};

let createPopupHolders = () => {
    let popupHolder = createPopupHolder();
    let popupCard = createPopupCard();
    let popupForm = createPopupForm();
    return [ popupHolder, popupCard, popupForm, ]; 
};


export {
    createPopupHolder,
    createPopupHolders,
};
