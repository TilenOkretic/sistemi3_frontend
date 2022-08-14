import { getDomFromReference } from '../../utils/dom/getters';

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom element 
 * @returns 
 */
export let clearAnimation = (domRef) => {
    let dom = getDomFromReference(domRef);
    dom.style.animation = ''; 
};
