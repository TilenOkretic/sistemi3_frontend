import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasFrontGuardRail } from '../../../../config/getters/extraEquipment';
import { setHasFrontGuardRail } from '../../../../config/setters/extraEquipment';
import { getRegexForFrontGuardRail } from '../../../../regexLib/sideRails/frontguardRail';

export let addFrontguardRail = async (api) => {
    let FGR_BTN = document.querySelector('#extra-fgr-btn');
    
    !getHasFrontGuardRail(api) ? showElement(getRegexForFrontGuardRail(), api) : hideElement(getRegexForFrontGuardRail(), api);
    setHasFrontGuardRail(!getHasFrontGuardRail(api), api);
    !getHasFrontGuardRail(api) ? clearSelection(FGR_BTN, true) : '';
};
