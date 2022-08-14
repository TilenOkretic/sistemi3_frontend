import { getHasInboardMotor, getIsHullMotor } from '../../../../../config/getters/hullAndMotorization';
import { getRegexForInboardMotorByCount, } from '../../../../../regexLib/motorization/planing';

export let inboarMotorShowList = (api) => {
    if (!getIsHullMotor(api) || !getHasInboardMotor(api)) {
        return [];
    }
    return [ getRegexForInboardMotorByCount(api) ];
};
