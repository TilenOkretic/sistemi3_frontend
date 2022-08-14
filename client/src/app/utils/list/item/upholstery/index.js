import { showElementList } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { mergeArrays } from '../../../../../sketchfab_webpack_engine/utils/arrays';
import { createListItem } from '../../../../../sketchfab_webpack_engine/utils/list/item';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getCockpitLayout } from '../../../../config/getters/cockpitLayout';
import { getHasPiping, getInnerCushioning, getOuterCushioning } from '../../../../config/getters/upholstery';
import { setInnerCushioning, setOuterCushioning } from '../../../../config/setters/upholstery';
import { getRegexForPiping } from '../../../../regexLib/piping/cockpitLayout';
import { getRegexForCushioning } from '../../../../regexLib/upholstery';
import { hideCurrentCushioning } from '../../../dictionary/boatDictionaryUtil';

export let createUpholsteryListItem = async (type, color, api) => {
    let colorImgRef = color;
    let out = await createListItem(`tapestry-${type}-${color}`, type, colorImgRef, api, () => {
        hideCurrentCushioning(api);
        type == 'outer' ? setOuterCushioning(color, api) : setInnerCushioning(color, api);
        
        let showReg = getRegexForCushioning(getCockpitLayout(api), api);
        mergeArrays(showReg, getHasPiping(api) ? getRegexForPiping(api) : []);
        showElementList(showReg, api);

        console.log(type, color);

        let clrItems = document.getElementsByClassName(type);
        for (let i = 0; i < clrItems.length; i++) {
            clearSelection(clrItems[i]);
        }

        showSelection(out);
    });

    if (type == 'outer' && color == getOuterCushioning(api)) {
        showSelection(out);
    }

    if (type == 'inner' && color == getInnerCushioning(api)) {
        showSelection(out);
    }

    return out;
};
