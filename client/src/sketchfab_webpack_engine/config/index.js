import { validateAPI } from '../utils/validation/api';

// TODO: defaultConfig refactor !!
/**
 * 
 * @param {String} key 
 * @param {String||Boolean} value 
 * @param {*} api 
 * @returns 
 */
let setConfigKeyValuePair = (key, value, api) => {
    if(!validateAPI(api)) return;
    api.defaultConfig[key] = value;
};

/**
 * 
 * @param {String} key 
 * @param {*} api 
 * @returns 
 */
let getConfigFromKey = (key, api) => {
    if(!validateAPI(api)) return;
    return api.defaultConfig[key];
};

export {
    setConfigKeyValuePair,
    getConfigFromKey,
};
