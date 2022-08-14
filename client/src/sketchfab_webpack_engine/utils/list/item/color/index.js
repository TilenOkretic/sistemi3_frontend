import { addClass, createElement } from '../../../dom';

/**
 * 
 * @param {string} id 
 * @param {Image} colorImg 
 * @returns HTML div 
 */
let createColorImage = (id, colorImg) => {
    let cd = createElement('img', `${id}-color-img`);
    addClass(cd, 'background-size-100');
    addClass(cd, 'w-4r');
    addClass(cd, 'h-4r');
    addClass(cd, 'border-2');
    addClass(cd, 'border-dark');
    cd.src = colorImg;

    return cd;
};

/**
 * 
 * @param {String} id 
 * @returns HTML paragraph
 */
let createColorText = (id) => {
    let ct = createElement('p', `${id}-paragraph`);
    addClass(ct, 'm-0');
    addClass(ct, 'text-capitalize');
    return ct;
};


export {
    createColorImage,
    createColorText,
};
