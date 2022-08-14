import { addClass, createElement } from '../../dom';

let createPopupForm = () => {
    let out = createElement('form', 'popup-form');
    addClass(out, 'text-center');
    return out;
};

let createPopupFormSubmit = (btnText) => {
    let out = createElement('button', 'popup-submit-button');
    out.type = 'submit';
    out.textContent = btnText;
    addClass(out, 'on-hover');
    addClass(out, 'bg-transparent');
    addClass(out, 'border-none');
    addClass(out, 'text-uppercase');
    addClass(out, 'button-hover');
    return out;
};

export {
    createPopupForm,
    createPopupFormSubmit,
};
