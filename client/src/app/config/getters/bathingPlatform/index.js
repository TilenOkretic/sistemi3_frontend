import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getIsPlatformVisible = (api) => getConfigFromKey('platform', api) === 'permateekBathingPlatform';

export {
    getIsPlatformVisible,
};
