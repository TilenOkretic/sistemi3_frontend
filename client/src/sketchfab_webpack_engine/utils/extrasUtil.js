import { errorLog } from '../logger';
import { validateDOM } from './validation/dom';

let buildExtraDOMId = (elementName) => `extra-${elementName}-btn`;

/**
 * 
 * @param {String || DOM Element} domRef - dom element reference or just its id 
 * @returns DOM element
 */
let getExtraDOMFromReference = (domRef) => {
    if(typeof domRef == 'string') {
        let domId = buildExtraDOMId(domRef);
        let out = document.getElementById(domId);
        validateDOM(out, domId);
        return out;
    } else if (domRef instanceof Element) {
        return domRef;
    }
    errorLog(`${domRef} is not a valid reference to the DOM elemnt`);
};

/**
 * Show option under cockpit extras
 * @param {DOMElemnt || String} element - dom element reference or just its id 
 */
let showExtraOption = (element) => {
    if(!element) return;
    let optBtn = getExtraDOMFromReference(element);
    optBtn.classList.remove('d-none');
};

/**
 * Clear option under cockpit extras
 * @param {DOMElemnt || String} element - dom element reference or just it's id 
 */
let clearExtraOption = (element) => {
    if(!element) return;
    let optBtn = getExtraDOMFromReference(element);
    optBtn.classList.add('d-none');
};

export {
    buildExtraDOMId,
    clearExtraOption,
    showExtraOption,
};
