import { validateObject, validateString } from '..';
import { elementExists } from '../../../dictionary/model';
import { errorLog } from '../../../logger';
import { validateAPI } from '../api';

/**
 * 
 * @param {Object||String} elementRef - reference to the element 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns true if the element reference is valid, false otherwise
 */
let validateModelElement = (elementRef, api) => {
    validateAPI(api);
    typeof elementRef === 'string' ? validateString(elementRef) : validateObject(elementRef);
    if(!elementExists(elementRef, api)) {
        errorLog(`Element with name ${elementRef} does not exist`);
        return false;
    }
    return true;
};

let validateModelId = (modelId, api) => {
    validateAPI(api);
    validateString(modelId);
    if(api.modelsList.indexOf(modelId) === -1) {
        errorLog(`${modelId} is not a valid model identificator`);
        return false;
    }
    return true;
};

export {
    validateModelElement,
    validateModelId,
};
