import { errorLog } from '../../logger';

/**
 * 
 * @param {String} strRef - string reference to validate 
 * @returns boolean: true -> valid type or instanceof string | false -> otherwise 
 */
let validateString = (strRef) => {
    if (typeof strRef !== 'string' && !(strRef instanceof String)) {
        errorLog(`${strRef} is not a valid string`);
        return false;
    }

    return true;
};

/**
 * 
 * @param {Object} objRef - object reference to validate 
 * @returns boolean: true -> valid type or instanceof object | false -> otherwise 
 */
let validateObject = (objRef) => {
    if (typeof objRef !== 'object' && !(objRef instanceof Object)) { 
        errorLog(`${objRef} is not an valid object`);
        return false;
    }
    return true;
};

/**
 * 
 * @param {Object "list"} lstRef - list reference to validate
 * @returns true -> valid type or instanceof object "list" | false -> otherwise 
 */
let validateList = (lstRef) => validateObject(lstRef); 

let validateNumber = (numRef) => {
    if(typeof numRef !== 'number' && !(numRef instanceof Number)) {
        errorLog(`${numRef} is not a valid number`);
        return false;
    }
    return true;
};

export {
    validateString,
    validateObject,
    validateList,
    validateNumber,
};
