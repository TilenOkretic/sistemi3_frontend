import { hideElement, hideElementList, showElement, showElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { enableHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons/enable';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsCockpitLayoutLounge, getIsCockpitLayoutStandard } from '../../../../../config/getters/cockpitLayout';
import { getHasGalleyKitchen } from '../../../../../config/getters/extraEquipment';
import { getHasStarboardBench } from '../../../../../config/getters/extraEquipment/starboardBench';
import { getInnerCushioning, getOuterCushioning } from '../../../../../config/getters/upholstery';
import { setHasStarboardBench } from '../../../../../config/setters/extraEquipment/starboardBench';
import { getRegexForGalleyKitchenFront, getRegexForGalleyKitchenStarboard } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForLoungeLayoutStarboardBench, getRegexForStandardLayoutStarboardBench, getRegexForStarboardBenchBase } from '../../../../../regexLib/extraEquipment/starboardBench';
import { getRegexForCoDirverSeatPiping } from '../../../../../regexLib/piping/cockpitLayout';

export let loadStarboardBench = (api) => {
    setHasStarboardBench(!getHasStarboardBench(api), api);
    let list = [
        getRegexForStarboardBenchBase(),
        ...getIsCockpitLayoutStandard(api) ? getRegexForStandardLayoutStarboardBench(api): [],
        ...getIsCockpitLayoutLounge(api) ?  getRegexForLoungeLayoutStarboardBench(api): [],
    ];
    if(!getHasStarboardBench(api)) {
        hideElementList(list, api);
        clearSelection('extra-rearbenchconfiguration-starboardBench-btn');
    } else {
        if(getHasGalleyKitchen(api)) {
            hideElement(getRegexForGalleyKitchenStarboard(), api);
            hideElementList([ 
                `cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`,
                `cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`,
                getRegexForCoDirverSeatPiping(),
            ], api);
            showElement(getRegexForGalleyKitchenFront(), api);
            enableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');
        }
        showElementList(list, api);
        showSelection('extra-rearbenchconfiguration-starboardBench-btn');
    }
};
