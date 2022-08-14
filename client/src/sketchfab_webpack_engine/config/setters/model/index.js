import { validateAPI } from '../../../utils/validation/api';

let setModelReference = (modelId, sketchfabId, api) => {
    if(!validateAPI(api)) return;
    if(!api.modelMap) {
        api.modelMap = {};
    }
    api.modelMap[modelId]=sketchfabId;
};

export {
    setModelReference,
};
