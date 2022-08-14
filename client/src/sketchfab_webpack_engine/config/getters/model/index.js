import { validateAPI } from '../../../utils/validation/api';

let getModelReference = (modelId, api) =>{ 
    if(!validateAPI(api)) return;    
    return api.modelMap[modelId];
};

export {
    getModelReference,
};
