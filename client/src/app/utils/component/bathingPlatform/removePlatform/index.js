import { hideElementList } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsPlatformVisible } from '../../../../config/getters/bathingPlatform';
import { setPlatformVisible } from '../../../../config/setters/bathingPlatform';
import { getRegexForRearPlatformColor } from '../../../../regexLib/bathingPlatform/color';
import { getRegexForRearPlatformConstruction } from '../../../../regexLib/bathingPlatform/construction';
import { getRegexForRearPlatformSideRail } from '../../../../regexLib/sideRails/bathingPlatform';

export let removePlafrom = async (api) => {
    if (getIsPlatformVisible(api)) {

        let hideReg = [ getRegexForRearPlatformColor(api), getRegexForRearPlatformSideRail(api), getRegexForRearPlatformConstruction() ];

        hideElementList(hideReg, api);
        
        clearSelection('bathingPlatform-pbpfl-platform');
        showSelection(document.getElementById('bathingPlatform-no-platform'));
        setPlatformVisible('noPlatform', api);
    }
};
