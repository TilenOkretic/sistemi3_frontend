import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';
import { getHasExtraEquipment } from '../extraEquipment';

let getInnerCushioning = (api) => getConfigFromKey('innerCushioning', api);

let getOuterCushioning = (api) => getConfigFromKey('outerCushioning', api);

let getHasPiping = (api) => getHasExtraEquipment('piping', 'piping', api);

export {
    getInnerCushioning,
    getOuterCushioning,
    getHasPiping,
};
