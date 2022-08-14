import { showElement, showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getIsPlatformVisible } from '../../../config/getters/bathingPlatform';
import { getHasOutboardMotor } from '../../../config/getters/hullAndMotorization';
import { getRegexForRearPlatformOutboardEngineSideRail } from '../../../regexLib/sideRails/outboardEngine';
import { getRegexForRearPlatformSideRail } from '../../../regexLib/sideRails/bathingPlatform';
import { getRegexForSideRails } from '../../../regexLib/sideRails';
import { hideAllSideRails, } from '../../dictionary/boatDictionaryUtil';

export let updateSideRails = (api) => {
    let engineCon = getHasOutboardMotor(api) && !api.isModel21() ? getRegexForRearPlatformOutboardEngineSideRail(api) : getIsPlatformVisible(api) ? getRegexForRearPlatformSideRail(api) : '';

    let reg = getRegexForSideRails(api);
    reg.push(engineCon);

    hideAllSideRails(api);
    showElementList(reg, api);

    if (api.isModel21() && !getHasOutboardMotor(api)) {
        showElement(getRegexForRearPlatformSideRail(api), api);
    }
};
