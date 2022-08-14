import { getIsPlatformVisible } from '../../../../config/getters/bathingPlatform';
import { getHasOutboardMotor } from '../../../../config/getters/hullAndMotorization';
import { getRegexForRearPlatformColor } from '../../../../regexLib/bathingPlatform/color';
import { getRegexForRearPlatformConstruction } from '../../../../regexLib/bathingPlatform/construction';
import { getRegexForRearPlatform21Color } from '../../../../regexLib/bathingPlatform/model21/color';
import { getRegexForRearPlatformSideRail } from '../../../../regexLib/sideRails/bathingPlatform';


export let platformShowList = (api) => {
    let showList = [];
    if (getIsPlatformVisible(api)) {
        if (!getHasOutboardMotor(api) && !api.isModel21()) {
            showList.push(getRegexForRearPlatformConstruction());
            showList.push(getRegexForRearPlatformColor(api));
            showList.push(getRegexForRearPlatformSideRail(api));
        } else if (api.isModel21()) {
            showList.push(getRegexForRearPlatform21Color(api));
        }
    }
    return showList;
};
