import { showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { addClass } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { setHasSunbedTent } from '../../../../config/setters/extraEquipment';
import { setRoofColor, setRoofType } from '../../../../config/setters/roofSelection';
import { getRegexForBiminiSmall } from '../../../../regexLib/roofSolutions';
import { hideAllRoof } from '../../../dictionary/boatDictionaryUtil';
import { clearExtraEquipmentSelection } from '../../extraEquipment/extraEquipmentSelection';
import { clearRoofSelections } from '../roofSelection';
import { getRoofList } from '../roofUtil';

export let loadBiminiStandard = (api) => {
    clearExtraEquipmentSelection('snbd-tent');
    addClass(document.querySelector('#extra-snbd-tent-btn'), 'd-none');

    addClass(getRoofList('hht'), 'd-none');
    addClass(getRoofList('ttop'), 'd-none');

    setRoofColor('none', api);
    setRoofType('bimini-small', api);
    setHasSunbedTent(false, api);

    hideAllRoof(api);
    showElement(getRegexForBiminiSmall(api), api);

    clearRoofSelections([ 'no', 'hht', 'bsh', 'ttop', ...api.isModel21() ? api.isModelCabinEvo() ? [ 'bsm' ] : [] : [] ]);

};
