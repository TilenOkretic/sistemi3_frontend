import { getRegexForCushioning } from '../../../../../regexLib/upholstery';
import { getRegexForGalleyKitchenRear } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForSideBenchBase } from '../../../../../regexLib/extraEquipment/sideBench';
import { setLoungeLayoutConfigs } from '../../../../../config/setters/cockpitLayout/lounge';
import { getRegexForLoungeLayoutInsert } from '../../../../../regexLib/cockpitLayout/lounge/insert';
import { getRegexForBusBench } from '../../../../../regexLib/extraEquipment/busBench';
import { getRegexForBusCoDriver } from '../../../../../regexLib/extraEquipment/coDriver';
import { hideCurrentCushioning } from '../../../../dictionary/boatDictionaryUtil';
import { hideElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';

export let getLoungeLayout = (api) => {
    setLoungeLayoutConfigs(api);
    let reg = [ 
        getRegexForLoungeLayoutInsert(api),
        getRegexForDeckTable(),
        ...getRegexForSideBenchBase(),
        ...getRegexForCushioning('lounge', api)
    ];

    let hideList = [ 
        getRegexForGalleyKitchenRear(), 
        getRegexForRearBench(), 
        getRegexForBusBench(),
        getRegexForBusCoDriver(),
        ...getRegexForSideBenchBase(), 
    ];
    
    hideCurrentCushioning(api);    
    hideElementList(hideList, api);

    return reg;
};
