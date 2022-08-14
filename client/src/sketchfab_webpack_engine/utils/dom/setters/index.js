import { validateString } from '../../validation';
import { getDomFromReference } from '../getters';

/**
 * 
 * @param {DOMElement | String} dom 
 * @param {String} domId to be set 
 * @returns boolean
 */
let setIdOfDOM = (domRef, domId) => {
    validateString(domId);
    let dom = getDomFromReference(domRef);
    dom.id = domId;
    return true;
};

export {
    setIdOfDOM,
};
