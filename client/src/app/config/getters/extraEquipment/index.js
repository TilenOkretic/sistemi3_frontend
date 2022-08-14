import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getHasExtraEquipment = (extraeq, value, api) => api.defaultConfig.extraEquipment[extraeq] == value;

let getSteeringWheelType = (api) => getConfigFromKey('steeringWheel', api);

let getHasMiniCupHolder = (api) => getHasExtraEquipment('miniCupHolder', 'miniCupHolder', api);

let getHasAdditionalStorage = (api) => getHasExtraEquipment('additionalStorage', 'additionalStorage', api);

let getHasMarineCarpet = (api) => getHasExtraEquipment('marineCarpet','marineCarpet', api);

let getHasGalleyKitchen = (api) => getHasExtraEquipment('rearBenchConfiguration', 'galleyKitchen', api);

let getHasRearBench = (api) => getHasExtraEquipment('rearBenchConfiguration', 'rearBench', api);

let getHasWindshield = (api) => getHasExtraEquipment('windshield', 'windshield', api);

let getHasDeckTable = (api) => getHasExtraEquipment('tableConfiguration', 'deckTable', api);

let getHasBowCushioning = (api) => getHasExtraEquipment('bowCushioning', 'bowCushioning', api);

let getHasFrontGuardRail = (api) => getHasExtraEquipment('frontGuardRail', 'frontGuardRail', api);

let getHasSunbedTent = (api) => getHasExtraEquipment('sunbedTent', 'sunbedTent', api);

export {
    getHasExtraEquipment,
    getSteeringWheelType,
    getHasMiniCupHolder,
    getHasAdditionalStorage,
    getHasMarineCarpet,
    getHasGalleyKitchen,
    getHasRearBench,
    getHasWindshield,
    getHasDeckTable,
    getHasBowCushioning,
    getHasFrontGuardRail,
    getHasSunbedTent,
};
