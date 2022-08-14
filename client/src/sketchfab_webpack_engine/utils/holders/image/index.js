import { getImageFromImageDictionary } from '../../../dictionary/image/getters';
import { addClass, createElement } from '../../dom';

/**
 * 
 * @param {String} modelId - model identificator 
 * @param {String} alt - image alt  
 * @returns img HTML element
 */
export let createImageHolder = (modelId, alt, api) => {
    let id = `card-img-${document.getElementsByTagName('img').length}`;
    let cardImg = createElement('img', id);
    let imgRef = getImageFromImageDictionary(modelId, api);
    imgRef === -2 || imgRef === -1 ? imgRef = 'https://via.placeholder.com/512x256.png' : '';
    cardImg.src = imgRef;
    cardImg.alt = alt;
    addClass(cardImg, 'w-100');
    addClass(cardImg, 'h-100');
    return cardImg;
};
