import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasMarineCarpet } from '../../../../config/getters/extraEquipment';
import { setHasMarineCarpet } from '../../../../config/setters/extraEquipment';
import { getRegexForMarineCarpet } from '../../../../regexLib/extraEquipment/marineCarpet';

export let addMarineCarpet = async (api) => {
    
    getHasMarineCarpet(api) ? hideElement(getRegexForMarineCarpet(api), api) : showElement(getRegexForMarineCarpet(api), api);
    setHasMarineCarpet(!getHasMarineCarpet(api), api);
    getHasMarineCarpet(api) ? showSelection('extra-mac-btn') : clearSelection('extra-mac-btn');
};
