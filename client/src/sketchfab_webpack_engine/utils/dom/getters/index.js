import { errorLog } from '../../../logger';
import { validateDOM } from '../../validation/dom';

/**
 * 
 * @param {DOM Element | String} domRef - reference to the dom element 
 * @returns string id of the dom element
 */
let getDomId = (domRef) => {
    let dom = getDomFromReference(domRef);
    return dom.id;
};

/**
 * 
 * @param {DOM Element || String} domRef - a reference to the dom element; eather the dom element itself or dom element's id 
 * @returns 
 */
let getDomFromReference = (domRef) => {
    let out;
    let outId;
    if (typeof domRef === 'string') {
        outId = `#${domRef}`;
        out = document.querySelector(outId);
    } else if (domRef instanceof Element){
        out = domRef;
        outId = domRef.id;
    } else {
        errorLog(`${domRef} is neither a dom string id nor an instance of an element`);
    }
    validateDOM(out, outId);
    return out;
};


export {
    getDomId,
    getDomFromReference,
};
