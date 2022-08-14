import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';
import { getHasExtraEquipment } from '../../getters/extraEquipment';
import { popExtraEquipment, pushExtraEquipment } from '../extraEquipment';

let setInnerCushioning = (innerCushioning, api) => {
    setConfigKeyValuePair('innerCushioning', innerCushioning, api);
};

let setOuterCushioning = (outerCushioning, api) => {
    setConfigKeyValuePair('outerCushioning', outerCushioning, api);
};

let setHasPiping = (piping, api) => {
    piping ? pushExtraEquipment('piping', 'piping', api) : popExtraEquipment('piping', api);
    return getHasExtraEquipment('piping', 'piping', api);
};

export {
    setInnerCushioning,
    setOuterCushioning,
    setHasPiping,
};
