import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasSunbedTent } from '../../../../config/getters/extraEquipment';
import { getHasRoof } from '../../../../config/getters/roofSelection';
import { setHasSunbedTent } from '../../../../config/setters/extraEquipment';
import { getRegexForSunbedTent } from '../../../../regexLib/extraEquipment/sunbedTent';

export let addSunbedTent = async (api) => {
    let SUNBED_TENT_BUTTON = document.querySelector('#extra-snbd-tent-btn');
    
    if (getHasRoof(api)) {        
        getHasSunbedTent(api) ? hideElement(getRegexForSunbedTent(), api) : showElement(getRegexForSunbedTent(), api);
        setHasSunbedTent(!getHasSunbedTent(api), api);
        !getHasSunbedTent(api) ? clearSelection(SUNBED_TENT_BUTTON) : showSelection(SUNBED_TENT_BUTTON);
    } else {
        clearSelection(SUNBED_TENT_BUTTON);
    }
};
