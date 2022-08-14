import { validateAPI } from '../../validation/api';

/**
 * 
 * @param {String} id 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @returns API Component || -1 if component with id does not exist
 */
let getComponentFromId = (id, api) => {
    if(!validateAPI(api)) return;

    for (let i = 0; i < api.COMPONENTS.length; i++) {
        if(api.COMPONENTS[i].id == id) {
            return api.COMPONENTS[i];
        }
    }
    return -1;
};

export {
    getComponentFromId,
};
