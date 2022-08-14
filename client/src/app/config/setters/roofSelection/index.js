import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setRoofColor = (color, api) => {
    setConfigKeyValuePair('roofColor', color, api);
};

let setRoofType = (type, api) => {
    setConfigKeyValuePair('roofType', type, api);
};

export {
    setRoofColor,
    setRoofType,
};
