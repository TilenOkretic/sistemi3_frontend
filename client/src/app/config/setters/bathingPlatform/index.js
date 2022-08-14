import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setPlatformVisible = (platformVisible, api) => {
    setConfigKeyValuePair('platform', platformVisible, api);
};

export {
    setPlatformVisible,
};
