import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getSideRailType = (api) => getConfigFromKey('extraEquipment', api)['sideRailsConfiguration'];

export {
    getSideRailType,
};
