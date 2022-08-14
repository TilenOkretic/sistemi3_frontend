import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasAdditionalStorage } from '../../../../config/getters/extraEquipment';
import { setHasAdditionalStorage } from '../../../../config/setters/extraEquipment';
import { getRegexForAdditionalStorage } from '../../../../regexLib/extraEquipment/additionalStorage';

export let addAdditionalStorage = async (api) => {
    
    getHasAdditionalStorage(api) ? hideElement(getRegexForAdditionalStorage(api), api) : showElement(getRegexForAdditionalStorage(api), api);
    setHasAdditionalStorage(!getHasAdditionalStorage(api), api);
    getHasAdditionalStorage(api) ? showSelection('extra-ads-btn') : clearSelection('extra-ads-btn');
};
