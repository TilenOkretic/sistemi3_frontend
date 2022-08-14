import { getRoofColor, getRoofType } from '../../config/getters/roofSelection';

let getRegexForBiminiSmall = (api) => api.isModelCabinEvo() ? 'bimini.small' : api.isModelCabin() ? 'bimini.standard' : null;

let getRegexForBiminiSpyhood = () => 'bimini.sprayhood';

let getRegexForRoofHHT = (api) => `roof.${getRoofColor(api)}`;

let getRegexForRoofTTOP = (api) => `roof.Ttop.${getRoofColor(api)}`;

let roofTypeMap = {
    'hht': (api) => getRegexForRoofHHT(api),
    'ttop': (api) => getRegexForRoofTTOP(api),
};

let getRegexForRoofColors = (api) => {
    let roofType = getRoofType(api); 
    return roofTypeMap[roofType](api);
};

export {
    getRegexForBiminiSmall,
    getRegexForBiminiSpyhood,
    getRegexForRoofHHT,
    getRegexForRoofTTOP,
    getRegexForRoofColors,
};
