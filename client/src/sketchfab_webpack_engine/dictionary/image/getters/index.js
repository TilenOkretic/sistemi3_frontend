

/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data  
 * @param {string} imageKey - string reference to the image inside the dictioanry 
 * @returns image date form stored in the image dictionary
 */
// TODO: image dictionary validation
let getImageFromImageDictionary = (imageKey, api) => api.imageDictionary ? api.imageDictionary[imageKey] ? api.imageDictionary[imageKey] : -2 : -1;

export {
    getImageFromImageDictionary,
};
