import { hideElement, hideElementList, showElement, showElementList } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasWindshield } from '../../../../config/getters/extraEquipment';
import { setHasWindshield } from '../../../../config/setters/extraEquipment';
import { getRegexForNoWindshield, getRegexForWindshield } from '../../../../regexLib/extraEquipment/windshield';

export let addWindshield = async (api) => {

    setHasWindshield(!getHasWindshield(api), api);
    !getHasWindshield(api) ? hideElementList(getRegexForWindshield(api), api) : showElementList(getRegexForWindshield(api), api);
    !getHasWindshield(api) ? showElement(getRegexForNoWindshield(api), api) :  hideElement(getRegexForNoWindshield(api), api);
    !getHasWindshield(api) ? clearSelection('extra-wds-btn') : showSelection('extra-wds-btn');
};
