import { validateAPI } from '../../../utils/validation/api';

/**
 * 
 * @param {String | Object} name - element key | object 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns id of the 3D element
 */
export let getElementID = (name, api) => {
    if(!validateAPI(api)) return;

    if(typeof name === 'object') {
        return api.componentDictionary[name.name].instanceID;
    } else {
        return api.componentDictionary[name].instanceID;
    }
};
