import { showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { addClass, removeClass } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasSunbedTent } from '../../../../config/setters/extraEquipment';
import { setRoofColor, setRoofType } from '../../../../config/setters/roofSelection';
import { getRegexForRoofColors } from '../../../../regexLib/roofSolutions';
import { hideAllRoof } from '../../../dictionary/boatDictionaryUtil';
import { clearExtraEquipmentSelection } from '../../extraEquipment/extraEquipmentSelection';
import { clearRoofSelections } from '../roofSelection';
import { getRoofColorElementId, getRoofList } from '../roofUtil';

export let loadTTopRoof = (api) =>{
    clearExtraEquipmentSelection('snbd-tent');
    addClass(document.querySelector('#extra-snbd-tent-btn'), 'd-none');

    for (let i = 0; i < getRoofList('ttop').childElementCount; i++) {
        clearSelection(getRoofList('ttop').children[i].id);
    }

    setRoofType('ttop', api);
    setRoofColor('darkAntracite', api);
    setHasSunbedTent(false, api);

    addClass(getRoofList('hht'), 'd-none');
    removeClass(getRoofList('ttop'), 'd-none');

    hideAllRoof(api);
    showElement(getRegexForRoofColors(api), api);

    showSelection(getRoofColorElementId('ttop', api));
    clearRoofSelections([ 'no', 'hht', 'bsh', ...api.isModel21() ? api.isModelCabin() ? [ 'bst' ] : api.isModelCabinEvo() ? [ 'bsm' ] : [] : [] ]);
};
