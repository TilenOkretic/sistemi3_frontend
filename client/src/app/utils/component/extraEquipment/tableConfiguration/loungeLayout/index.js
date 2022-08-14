import { hideElement, showElement, showElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasDeckTable } from '../../../../../config/setters/extraEquipment';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForDeckTableLoungeLayout } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTableLoungeLayout';
import { getRegexForTableCushioning } from '../../../../../regexLib/upholstery/tableConfiguration/loungeLayout';

export let loadLoungeLayoutDeckTable = (api) => {

    setHasDeckTable(false, api);

    hideElement(getRegexForDeckTable(), api);
    showElement(getRegexForDeckTableLoungeLayout(), api);
    showElementList([
        getRegexForTableCushioning('inner', api),
        getRegexForTableCushioning('outer', api),
    ], api);

    clearSelection('extra-tableconfiguration-normal');
};
