import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setBoatModel = (model, api) => {
    setConfigKeyValuePair('boatModel', model, api);
};

export {
    setBoatModel,
};
