import { getElectricInboardEngineCount, getInboardMotorCount, getOutboardMotorCount } from '../../../config/getters/hullAndMotorization';

let getRegexForOutboardMotorByCount = (api) => `motorPlaning.outboard.${getOutboardMotorCount(api)}x`;
let getRegexForInboardMotorByCount = (api) => `motorPlaning.inboard.${getInboardMotorCount(api)}x`;
let getRegexForPlaningInboardMotorsByCount = (api) => `motorPlaning.inboard.${getElectricInboardEngineCount(api)}x`;

export {
    getRegexForOutboardMotorByCount,
    getRegexForInboardMotorByCount,
    getRegexForPlaningInboardMotorsByCount,
};
