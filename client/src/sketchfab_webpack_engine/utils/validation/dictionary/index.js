import { errorLog } from '../../../logger';
import { validateAPI } from '../api';

/**
 * Validates the component dictionary object
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns boolean 
 */
export let validateComponentDicitonary = (api) => {
    validateAPI(api);
    if(api.componentDictionary === null) {
        errorLog('Component dictionary is null');
        return false;
    }
    if(Object.entries(api.componentDictionary).length <= 0) {
        errorLog('Component dictionary is empty');
        return false;
    }
    return true;
};
