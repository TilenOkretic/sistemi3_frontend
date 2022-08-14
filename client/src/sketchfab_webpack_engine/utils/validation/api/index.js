import { errorLog } from '../../../logger';

/**
 * Validates the API object
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns boolean 
 */
export let validateAPI = (api) => {
    if(!api || typeof api != 'object') {
        errorLog('API object is not valid');
        return false;
    }
     
    return true;
};
