import { addClass } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasSunbedTent } from '../../../../config/setters/extraEquipment';
import { setRoofColor, setRoofType } from '../../../../config/setters/roofSelection';
import { hideAllRoof } from '../../../dictionary/boatDictionaryUtil';
import { clearExtraEquipmentSelection } from '../../extraEquipment/extraEquipmentSelection';
import { getAllRoofSolutionsButtons } from '../dom';
import { getRoofList } from '../roofUtil';

export let removeRoof = (api) => {
    !api.isModel21() ? clearExtraEquipmentSelection('snbd-tent') : '';
    !api.isModel21() ? addClass(document.querySelector('#extra-snbd-tent-btn'), 'd-none') : '';

    setRoofColor('none', api);
    setRoofType('none', api);
    setHasSunbedTent(false, api);

    getRoofList('hht') ? addClass(getRoofList('hht'), 'd-none') : '';
    getRoofList('ttop') ? addClass(getRoofList('ttop'), 'd-none') : '';

    hideAllRoof(api);

    clearSelection(getAllRoofSolutionsButtons('no'));
};
