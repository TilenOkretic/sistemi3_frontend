import { addClass, createCheckbox, createElement } from '../../dom';
import { createParagraph } from '../../dom/paragraph';
import { createFormMailWrapper } from '../form/mailWrapper';

/**
 * Creates a wrapper div for configuration finish use 
 * @param {String} id 
 * @returns wrapper div element
 */
export let createConfigFinishWrapper = (id) => {
    let out = createElement('div', `option-${id}`);
    addClass(out, 'd-flex');
    addClass(out, 'flex-row');
    addClass(out, 'justify-content-left');
    addClass(out, 'align-items-baseline');
    addClass(out, 'mh-1r');
    addClass(out, 'w-100');
    return out;
};

/**
 * Creates a checkbox with text
 * @param {String} id - checkbox id 
 * @param {String} optionText - text that is written next to the checkbox 
 * @returns 
 */
let createCheckboxAndWrapper = (id, optionText) => {
    let wrapper = createConfigFinishWrapper(id);
    let option = createCheckbox(`${id}-checkbox`);
    let optText = createParagraph(optionText);
    
    wrapper.appendChild(option);
    wrapper.appendChild(optText);
    
    return wrapper;
};

/**
 * Creates all popup dom element wrappers
 * @param {String} allowDataPorcessingText - text describing the allaw data processing option
 * @param {String} allowMarketingText - text describing the allaw marketing option
 * @returns array of wrapper dom elements
 */
let createPopupWrappers = (allowDataPorcessingText, allowMarketingText) => {
    let dataProcessingWrapper = createCheckboxAndWrapper('dataProcessing', allowDataPorcessingText);
    let formMailWrapper = createFormMailWrapper();
    let marketingWrapper = createCheckboxAndWrapper('marketing', allowMarketingText);
    let mailWrapper = createElement('div', 'mail-wrapper');
    
    return [ dataProcessingWrapper, formMailWrapper, marketingWrapper, mailWrapper, ];
};

export {
    createCheckboxAndWrapper,
    createPopupWrappers,
};
