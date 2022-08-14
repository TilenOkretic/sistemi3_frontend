import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getRoofColor = (api) => getConfigFromKey('roofColor', api);

let getRoofType = (api) => getConfigFromKey('roofType', api);

let getHasRoof = (api) => getConfigFromKey('roofType', api) != 'none';

export {
    getRoofColor,
    getRoofType,
    getHasRoof,
};
