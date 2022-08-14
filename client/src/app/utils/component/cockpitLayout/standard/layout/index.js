import { hideElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { setStandardLayoutConfigs } from '../../../../../config/setters/cockpitLayout/standard';
import { getRegexForLoungeLayoutInsert } from '../../../../../regexLib/cockpitLayout/lounge/insert';
import { getRegexForBusBench } from '../../../../../regexLib/extraEquipment/busBench';
import { getRegexForBusCoDriver } from '../../../../../regexLib/extraEquipment/coDriver';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForGalleyKitchenFront } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench, getRegexForRearBenchLoungeLayout } from '../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForSideBenchBase } from '../../../../../regexLib/extraEquipment/sideBench';
import { getRegexForCushioning } from '../../../../../regexLib/upholstery';
import { hideCurrentCushioning } from '../../../../dictionary/boatDictionaryUtil';
import { getRegexForDeckTableLoungeLayout } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTableLoungeLayout';
import { getRegexForTableCushioning } from '../../../../../regexLib/upholstery/tableConfiguration/loungeLayout';

export let getStandardLayout = (api) => {
    setStandardLayoutConfigs(api);
     
    let reg = [
        getRegexForDeckTable(),
        getRegexForRearBench(),
        ...getRegexForSideBenchBase(),
        ...getRegexForCushioning('standard', api) ];
    
    let hideList = [
        getRegexForBusBench(),
        getRegexForBusCoDriver(),
        getRegexForRearBenchLoungeLayout(),
        getRegexForLoungeLayoutInsert(api),
        getRegexForGalleyKitchenFront(),
        // deck table lounge layout
        getRegexForDeckTableLoungeLayout(),
        getRegexForTableCushioning('inner', api),
        getRegexForTableCushioning('outer', api),
    ]; 

    hideCurrentCushioning(api);    
    hideElementList(hideList, api);

    return reg;
};
