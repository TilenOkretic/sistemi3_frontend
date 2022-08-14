import { hideElement, showElement } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsCockpitLayoutStandard } from '../../../../../config/getters/cockpitLayout';
import { getHasGalleyKitchen } from '../../../../../config/getters/extraEquipment';
import { getHasPiping } from '../../../../../config/getters/upholstery';
import { setHasGalleyKitchen, setHasRearBench } from '../../../../../config/setters/extraEquipment';
import { getRegexForGalleyKitchenRear, getRegexForGalleyKitchenStarboard21 } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../regexLib/extraEquipment/rearBench';
import { updateCushioning } from '../../../../update/tapestry';
import { piping } from '../../../upholstery/piping';

export let addRearBench = (api) => {
    let GAK_BTN = document.querySelector('#extra-rearbenchconfiguration-galleyKitchen-btn');

    // TODO: maybe remove this because the condition never returns true ?!
    if (!getIsCockpitLayoutStandard(api) && !api.isModel21()) {
        clearSelection(GAK_BTN);
        return;
    }
    
    if (getHasGalleyKitchen(api)) {

        setHasGalleyKitchen(false, api);
        setHasRearBench(true, api);
        
        hideElement(api.isModel21() ? getRegexForGalleyKitchenStarboard21() : getRegexForGalleyKitchenRear(), api);
        showElement(getRegexForRearBench(), api);
    
        piping(getHasPiping(api), api);
        
        clearSelection(GAK_BTN);

        updateCushioning(api);
    }
};
