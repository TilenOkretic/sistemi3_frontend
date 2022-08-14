import { showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsPlatformVisible } from '../../../../config/getters/bathingPlatform';
import { setPlatformVisible } from '../../../../config/setters/bathingPlatform';
import { getRegexForRearPlatformColor } from '../../../../regexLib/bathingPlatform/color';
import { getRegexForRearPlatformConstruction } from '../../../../regexLib/bathingPlatform/construction';
import { getRegexForRearPlatformSideRail } from '../../../../regexLib/sideRails/bathingPlatform';

export let loadBathingPlatform = async (api) => {
    if (!getIsPlatformVisible(api)) {
    
        showElement(getRegexForRearPlatformColor(api), api);
        showElement(getRegexForRearPlatformSideRail(api), api);
        showElement(getRegexForRearPlatformConstruction(), api);
    
        setPlatformVisible('permateekBathingPlatform', api);
        showSelection('bathingPlatform-pbpfl-platform');
        clearSelection('bathingPlatform-no-platform');
    }
};
