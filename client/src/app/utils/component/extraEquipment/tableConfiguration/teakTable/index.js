import { hideElement, hideElementList, showElement } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasDeckTable } from '../../../../../config/getters/extraEquipment';
import { setHasDeckTable, setHasLoungeTable } from '../../../../../config/setters/extraEquipment';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForDeckTableLoungeLayout } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTableLoungeLayout';
import { getRegexForTableCushioning } from '../../../../../regexLib/upholstery/tableConfiguration/loungeLayout';

export let loadNormalDeckTable = async (api) => {
    if(!getHasDeckTable(api)){ 
        setHasLoungeTable(false, api);
        setHasDeckTable(true, api);
        !api.isModel21() ? clearSelection('extra-tableconfiguration-loungeLayout') : '';
        showElement(getRegexForDeckTable(), api);
        if(!api.isModel21()) {
            hideElement(getRegexForDeckTableLoungeLayout(), api);
            hideElementList([
                getRegexForTableCushioning('inner', api),
                getRegexForTableCushioning('outer', api),
            ], api);
        }
    } else {
        setHasDeckTable(false, api);
        hideElement(getRegexForDeckTable(), api);
        clearSelection('extra-tableconfiguration-normal');
    }
};
