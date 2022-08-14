import { validateList, validateString } from '../validation';
import { getDomFromReference } from './getters';

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom
 * @param {String} className class to add to DOM 
 * @returns boolean
 */
let addClass = (domRef, className) => {
    validateString(className);
    let dom = getDomFromReference(domRef);
    dom.classList.add(className);
    return true;
};

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom
 * @param {String} cls class to remove to DOM 
 * @returns boolean
 */
let removeClass = (domRef, cls) => {
    validateString(cls);
    let dom = getDomFromReference(domRef);
    return dom.classList.remove(cls);
};

/**
 * 
 * @param {DOMElement} domRef - reference to the dom element 
 * @param {String} oldClass - class name to remove
 * @param {String} newClass - class name to add
 * @returns boolean
 */
let replaceClass = (domRef, oldClass, newClass) => {
    validateString(oldClass);
    validateString(newClass);
    let dom = getDomFromReference(domRef);
    return dom.classList.replace(oldClass, newClass);    
};

/**
 * Removes the DOM element from the page
 * @param {DOMElment | String } domRef - reference to the dom; If string then it is an dom ID 
 */
let removeDom = (domRef) => {  
    let dom = getDomFromReference(domRef);
    dom.remove();
};

/**
 * Removes all event listeners from the DOM
 * @param {DOMElement | String} domRef - reference to the dom element
 * @returns DOM element
 */
let removeEventListener = (domRef) => {
    let dom = getDomFromReference(domRef);
    let elClone = dom.cloneNode(true);

    dom.parentNode.replaceChild(elClone, dom);
    return dom;
};

/**
 * 
 * @param {String} type DOM type 
 * @param {String} id DOM id
 * @returns newly created DOM element
 */
let createElement = (type, id) => {
    let e = document.createElement(type);
    e.id = id;
    return e;
};

/**
 * 
 * @returns HTML input checkbox element
 */
let createCheckbox = (id) => {
    let out = createElement('input', id);
    out.type = 'checkbox';
    return out;
};

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom element 
 * @param  {...DOMElements} list list of DOM elements to append to the parent
 */
let appendElementList = (domRef, ...list) => {
    let parent = getDomFromReference(domRef);
    validateList(list);

    list.forEach(child => {
        parent.appendChild(child);
    });
};

/**
 * 
 * @param {String} domId - id of the dom element 
 */
let domExists = (domId) => {
    let tmp = document.getElementById(domId);
    return tmp != null && tmp != undefined;
};

export {
    domExists,
    addClass,
    appendElementList,
    createCheckbox,
    createElement,
    removeClass,
    replaceClass,
    removeDom,
    removeEventListener,
};
