import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';
import { getHasExtraEquipment } from '../../getters/extraEquipment';

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ****************************************************************************************************** //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: take another look at this and maybe refactor it
let pushExtraEquipment = (key, value, api) => {
    if(getHasExtraEquipment(key, value, api) != value) {
        api.defaultConfig.extraEquipment[key] = value;
        return value;
    }
};

let popExtraEquipment = (key, api) => {
    api.defaultConfig.extraEquipment[key] = null;
    return key;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ****************************************************************************************************** //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

let setSteeringWheelType = (sWheel, api) => {
    setConfigKeyValuePair('steeringWheel', sWheel, api);
};

let setHasMiniCupHolder = (miniCupHolder, api) => {
    miniCupHolder ? pushExtraEquipment('miniCupHolders', 'miniCupHolders', api) : popExtraEquipment('miniCupHolders', api);
    
    return getHasExtraEquipment('miniCupHolder','miniCupHolder', api);
};

let setHasGalleyKitchen = (galleyKitchen, api) => {
    galleyKitchen ? pushExtraEquipment('rearBenchConfiguration', 'galleyKitchen', api) : popExtraEquipment('rearBenchConfiguration', api);
    
    return getHasExtraEquipment('rearBenchConfiguration', 'galleyKitchen', api);
};

let setHasRearBench = (rearBench, api) => {
    rearBench ? pushExtraEquipment('rearBenchConfiguration', 'rearBench', api) : popExtraEquipment('rearBenchConfiguration', api);
    
    return getHasExtraEquipment('rearBenchConfiguration', 'rearBench', api);
};

let setHasWindshield = (windshield, api) => {
    windshield ? pushExtraEquipment('windshield', 'windshield', api) : popExtraEquipment('windshield', api);
    
    return getHasExtraEquipment('windshield', 'windshield', api);
};

let setHasDeckTable = (deckTable, api) => {
    if(deckTable) {
        pushExtraEquipment('tableConfiguration', 'deckTable', api);
    } else {
        popExtraEquipment('tableConfiguration', api);
    }
    
    return getHasExtraEquipment('tableConfiguration','deckTable', api);
};

let setHasLoungeTable = (deckTable, api) => {
    if(deckTable) {
        pushExtraEquipment('tableConfiguration', 'loungeTable', api);
    } else {
        popExtraEquipment('tableConfiguration', api);
    }
    
    return getHasExtraEquipment('tableConfiguration','loungeTable', api);
};

let setHasBowCushioning = (bowCushioning, api) => {
    bowCushioning ? pushExtraEquipment('bowCushioning', 'bowCushioning', api) : popExtraEquipment('bowCushioning', api);
    
    return getHasExtraEquipment('bowCushioning','bowCushioning', api);
};

let setHasFrontGuardRail = (frontGuardRail, api) => {
    frontGuardRail ? pushExtraEquipment('frontGuardRail', 'frontGuardRail', api) : popExtraEquipment('frontGuardRail', api);
    
    return getHasExtraEquipment('frontGuardRail','frontGuardRail', api);
};

let setHasSunbedTent = (sunbedTent, api) => {
    sunbedTent ? pushExtraEquipment('sunbedTent', 'sunbedTent', api) : popExtraEquipment('sunbedTent', api);
    
    return getHasExtraEquipment('sunbedTent', 'sunbedTent', api);
};

let setHasAdditionalStorage = (additionalStorage, api) => {
    additionalStorage ? pushExtraEquipment('additionalStorage', 'additionalStorage', api) : popExtraEquipment('additionalStorage', api);
    
    return getHasExtraEquipment('additionalStorage', 'additionalStorage', api);
};

let setHasMarineCarpet = (marineCarpet, api) => {
    marineCarpet ? pushExtraEquipment('marineCarpet', 'marineCarpet', api) : popExtraEquipment('marineCarpet', api);

    return getHasExtraEquipment('marineCarpet','marineCarpet', api);
};


export {
    pushExtraEquipment,
    popExtraEquipment,
    setSteeringWheelType,
    setHasMiniCupHolder,
    setHasGalleyKitchen,
    setHasRearBench,
    setHasWindshield,
    setHasDeckTable,
    setHasLoungeTable,
    setHasBowCushioning,
    setHasFrontGuardRail,
    setHasSunbedTent,
    setHasAdditionalStorage,
    setHasMarineCarpet,
};
