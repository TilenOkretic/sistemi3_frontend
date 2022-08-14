import { addClass, createElement } from '../../dom';

export let createOptionalInfo = (text) => {
    let oita = createElement('textarea', 'optionalInfoArea');
    oita.placeholder = text;
    addClass(oita, 'w-100');
    addClass(oita, 'py-1');
    addClass(oita, 'my-1');

    return oita;
};
