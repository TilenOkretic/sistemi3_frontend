import { errorLog } from '../../logger';
import { validateAPI } from '../../utils/validation/api';
import { validateComponentDicitonary } from '../../utils/validation/dictionary';
import { validateModelElement } from '../../utils/validation/model';
import { getElementID } from './getters';

/**
 * 
 * @param {Object||String} elementRef - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns boolean, wether the element exists inside the component dictionary
 */
let elementExists = (elementRef, api) => {
    if(!validateAPI(api)) return;

    if(typeof elementRef === 'object'){
        if (api.componentDictionary[elementRef.name] == null || api.componentDictionary[elementRef.name] == undefined) {
            errorLog(`Element with index '${elementRef.name}' does not exist`); 
            return false;
        } 
        return api.componentDictionary[elementRef.name] != null;
    }else if (typeof elementRef === 'string'){
        let name = elementRef;
        if (api.componentDictionary[name] == null || api.componentDictionary[name] == undefined) {
            errorLog(`Element with index '${name}' does not exist`); 
            return false;
        }
        return api.componentDictionary[name] != null;
    }
};

/**
 * 
 * @param {Object||String} elementRef - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true
 */
let showElement = (elementRef, api) => {
    if(!validateAPI(api)) return;
    if(!validateModelElement(elementRef, api)) return;
    
    api.show(getElementID(elementRef, api));
    return true;
};

/**
 * 
 * @param {Object||String} elementRef - reference to the element
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true
 */
let hideElement = (elementRef, api) => {
    if(!validateAPI(api)) return;

    elementExists(elementRef, api) ? api.hide(getElementID(elementRef, api)) : console.error(`Element with name ${elementRef} does not exist`);
    return true;
};

/**
 * 
 * @param {array} elementList - element list array
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
let showElementList = (elementList, api) => {
    if(!validateAPI(api)) return;

    elementList = elementList.filter(e => e != '');

    elementList.forEach((key) => {
        elementExists(key, api) ? showElement(key, api) : '';
    });
};

/**
 * 
 * @param {array} elementList - element list array
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
let hideElementList = (elementList, api) => {
    if(!validateAPI(api)) return;

    elementList = elementList.filter(e => e != '');

    elementList.forEach((key) => {
        elementExists(key, api) ? hideElement(key, api) : '';
    });
};

/**
 * 
 * @param {boolean} condition 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
let hide = (condition, api) => {
    if(!validateAPI(api)) return;

    for (let key in api.componentDictionary) {
        condition(key) ? api.hide(api.componentDictionary[key].instanceID) : '';
    }
};

/**
 * 
 * @param {string} condition -  key for search  
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns one element that satisfies the condition given 
 */
let find = (condition, api) => {
    if(!validateAPI(api)) return;
    if(!validateComponentDicitonary(api)) return;
    
    for (let key in api.componentDictionary) {
        if(key.includes(condition)) return api.componentDictionary[key];
    }
    
    errorLog(`Element with key: '${condition}' does not exsist`);
    return -1;
};

/**
 * 
 * @param {string} condition -  key for search  
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns all elements that satisfy the condition given 
 */
let findAll = (condition, api) => {
    if(!validateAPI(api)) return;

    let out = [];
    for (let key in api.componentDictionary) {
        key.includes(condition) ? out.push(api.componentDictionary[key]) : '';
    }
    return out;
};



export {
    elementExists,
    showElement,
    hideElement,
    showElementList,
    hideElementList,
    hide,
    find,
    findAll,
};
