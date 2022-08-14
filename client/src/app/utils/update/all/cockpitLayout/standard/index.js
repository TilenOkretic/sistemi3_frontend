import { getIsCockpitLayoutStandard } from '../../../../../config/getters/cockpitLayout';
import { getHasGalleyKitchen, getHasRearBench } from '../../../../../config/getters/extraEquipment';
import { getRegexForGalleyKitchenRear } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForSideBenchBase } from '../../../../../regexLib/extraEquipment/sideBench';
import { getRegexForCushioning } from '../../../../../regexLib/upholstery';


export let standardLayoutShowList = (api) => {
    if (!getIsCockpitLayoutStandard(api)) { return []; }
    let showList = [ 
        ...getRegexForSideBenchBase(),
        ...getRegexForCushioning('standard', api),
    ];
    getHasGalleyKitchen(api) ? showList.push(getRegexForGalleyKitchenRear()) : '';
    getHasRearBench(api) ? showList.push(getRegexForRearBench()) : '';
    return showList;
};
