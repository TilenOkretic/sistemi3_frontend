import { hideElementList, showElement } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { enableHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons/enable';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsCockpitLayoutLounge } from '../../../../../config/getters/cockpitLayout';
import { getHasGalleyKitchen } from '../../../../../config/getters/extraEquipment';
import { getHasStarboardBench } from '../../../../../config/getters/extraEquipment/starboardBench';
import { getInnerCushioning, getOuterCushioning } from '../../../../../config/getters/upholstery';
import { setHasGalleyKitchen, setHasRearBench } from '../../../../../config/setters/extraEquipment';
import { getRegexForGalleyKitchenFront, getRegexForGalleyKitchenRear, getRegexForGalleyKitchenStarboard, getRegexForGalleyKitchenStarboard21 } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForRearBenchCushioning } from '../../../../../regexLib/extraEquipment/rearBench/cushioning';
import { getRegexForLoungeLayoutStarboardBench, getRegexForStarboardBenchBase } from '../../../../../regexLib/extraEquipment/starboardBench';
import { getRegexForCoDirverSeatPiping } from '../../../../../regexLib/piping/cockpitLayout';

export let addGalleyKitchen = async (api) => {
    let  BEN_BTN = document.querySelector('#extra-rearbenchconfiguration-rearBench-btn');
    
    if (!getHasGalleyKitchen(api)) {
        if(getIsCockpitLayoutLounge(api)) {
            setHasGalleyKitchen(true, api);
            
            if(getHasStarboardBench(api)) {
                hideElementList([
                    `cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`,
                    `cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`,
                    getRegexForCoDirverSeatPiping(),
                ], api);
                showElement(getRegexForGalleyKitchenFront(), api);
                enableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');
            } else {
                hideElementList([
                    getRegexForStarboardBenchBase(), 
                    ...getRegexForLoungeLayoutStarboardBench(api)
                ], api);
                showElement(getRegexForGalleyKitchenStarboard(), api);
            }
            
        } 
        else {
            setHasRearBench( false, api);
            setHasGalleyKitchen(true, api);
            let show = api.isModel21() ? getRegexForGalleyKitchenStarboard21() : getRegexForGalleyKitchenRear();
            let hide = getRegexForRearBenchCushioning(api);
            hide.push(getRegexForRearBench());
            hideElementList(hide, api);
            showElement(show, api);
            clearSelection(BEN_BTN);
        }
    }
};
