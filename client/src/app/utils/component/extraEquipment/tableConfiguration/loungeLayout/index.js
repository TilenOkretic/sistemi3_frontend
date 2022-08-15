import { hideElement, hideElementList, showElement, showElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasLoungeTable } from '../../../../../config/getters/extraEquipment';
import { setHasDeckTable, setHasLoungeTable } from '../../../../../config/setters/extraEquipment';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForDeckTableLoungeLayout } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTableLoungeLayout';
import { getRegexForTableCushioning } from '../../../../../regexLib/upholstery/tableConfiguration/loungeLayout';

export let loadLoungeLayoutDeckTable = (api) => {

    if(!getHasLoungeTable(api)) {
        setHasDeckTable(false, api);
        setHasLoungeTable(true, api);
    
        hideElement(getRegexForDeckTable(), api);
        showElement(getRegexForDeckTableLoungeLayout(), api);
        showElementList([
            getRegexForTableCushioning('inner', api),
            getRegexForTableCushioning('outer', api),
        ], api);
    
        clearSelection('extra-tableconfiguration-normal');
    } else {
        setHasLoungeTable(false, api);
    
        hideElement(getRegexForDeckTableLoungeLayout(), api);
        hideElementList([
            getRegexForTableCushioning('inner', api),
            getRegexForTableCushioning('outer', api),
        ], api);
    
        clearSelection('extra-tableconfiguration-loungeLayout');
    }

    console.log(api.defaultConfig);
};
