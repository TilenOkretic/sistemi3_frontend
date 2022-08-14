import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getBoatModel = (api) => getConfigFromKey('boatModel', api);

export {
    getBoatModel,
};
