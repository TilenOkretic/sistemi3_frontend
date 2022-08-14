import { getIsCockpitLayoutCentral } from '../../../../../config/getters/cockpitLayout';
import { getHasGalleyKitchen, getHasRearBench } from '../../../../../config/getters/extraEquipment';
import { getRegexForGalleyKitchenStarboard } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForConsoleLayout } from '../../../../../regexLib/cockpitLayout/console';
import { getRegexForCushioning } from '../../../../../regexLib/upholstery';

export let consoleLayoutCentralShowList = (api) => {
    if (!getIsCockpitLayoutCentral(api)) { 
        return []; 
    }
    
    let showList = [
        ...getRegexForConsoleLayout(api),
        ...getRegexForCushioning('central', api)
    ];

    getHasRearBench(api) ? showList.push(getRegexForRearBench()) : getHasGalleyKitchen(api) ? showList.push(getRegexForGalleyKitchenStarboard()) : '';
    return showList;
};
