import { getImageFromImageDictionary } from '../../../dictionary/image/getters';

/**
 * 
 * @param {string} buttonId - id of the button dom element 
 * @param {string} imgRef - reference to the image in the image dictionary
 * @param {Sketchfab API object} api - JSON object holding all application data
 */
let setImageOfHTMLButton = (buttonId, imgRef, api) => {
    document.querySelector(`#${buttonId}`).src = getImageFromImageDictionary(imgRef, api);
};

export {
    setImageOfHTMLButton,
};
