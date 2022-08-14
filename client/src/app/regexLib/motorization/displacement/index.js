import { getElectricInboardEngineCount } from '../../../config/getters/hullAndMotorization';

let getRegexForDisplacementInboardMotorsByCount = (api) => `motorDisplacement.inboard.${getElectricInboardEngineCount(api)}x`;

export {
    getRegexForDisplacementInboardMotorsByCount,
};
