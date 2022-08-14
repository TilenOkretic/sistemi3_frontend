import { errorLog } from '../../../logger';

/**
 * 
 * @param {DOM Element} domRef 
 * @param {String} domId - id of the target dom
 * @returns boolean - wether the DOM is valid or not
 */
export let validateDOM = (domRef, domId) => {
    if (domRef == null) {
        errorLog(`${domId} is not valid`);
        return false;
    }

    if(!(domRef instanceof Element)) {
        errorLog(`DOM withe id ${domId} is not a valid DOM Elemnt`);
        return false;
    }
    
    return true;
};
