import { getIsPlatformVisible } from '../../../../../config/getters/bathingPlatform';
import { getHasOutboardMotor, getIsHullMotor } from '../../../../../config/getters/hullAndMotorization';
import { getRegexForRearDeckFlooring, getRegexForRearDeckFlooring32 } from '../../../../../regexLib/extraEquipment/deckFlooring';
import { getRegexForOutboardMotorByCount, } from '../../../../../regexLib/motorization/planing';
import { getRegexForRearPlatformOutboardEngineSideRail } from '../../../../../regexLib/sideRails/outboardEngine';
import { getRegexForRearPlatformSideRail } from '../../../../../regexLib/sideRails/bathingPlatform';
import { getRegexForRearPlatformOutboardEngineColor } from '../../../../../regexLib/bathingPlatform/outboardEngine/color';

export let outboardMotorShowList = (api) => {
    if (!getIsHullMotor(api) || !getHasOutboardMotor(api)) {
        return [];
    }
    let showList = [];
    showList.push(getRegexForRearPlatformOutboardEngineColor(api));
    showList.push(getRegexForOutboardMotorByCount(api));
    api.isModel32() ? showList.push(getRegexForRearDeckFlooring32()) : showList.push(getRegexForRearDeckFlooring(api));
    showList.push(getRegexForRearPlatformOutboardEngineSideRail(api));
    getIsPlatformVisible(api) ? showList.push(getRegexForRearPlatformSideRail(api)) : '';
    return showList;
};
