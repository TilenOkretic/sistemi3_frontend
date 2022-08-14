import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasBowCushioning } from '../../../../config/getters/extraEquipment';
import { setHasBowCushioning } from '../../../../config/setters/extraEquipment';
import { getRegexForBowCushioning } from '../../../../regexLib/extraEquipment/bowCushioning';

export let addBowCushioning = async (api) => {
    let BSC_BTN = document.querySelector('#extra-bsc-btn');
    
    !getHasBowCushioning(api) ? showElement(getRegexForBowCushioning(), api) : hideElement(getRegexForBowCushioning(), api);
    setHasBowCushioning(!getHasBowCushioning(api), api);
    !getHasBowCushioning(api) ? clearSelection(BSC_BTN, true) : '';
};
