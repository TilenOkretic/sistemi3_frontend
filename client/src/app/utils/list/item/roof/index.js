import { createListItem } from '../../../../../sketchfab_webpack_engine/utils/list/item';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getRoofType } from '../../../../config/getters/roofSelection';
import { setRoofColor } from '../../../../config/setters/roofSelection';
import { updateRoofColors } from '../../../update/roofColors';

export let createRoofListItem = (type, color, api) => {

    let colorImg = `${color}`;
    let out = createListItem(`color-roof-${type}-${color}`, '', colorImg, api, () => {
        // get button of the clicked color
        let listElement = out.childNodes[0];

        for (let i = 0; i < out.parentElement.childElementCount; i++) {
            if (out.parentElement.childNodes[i].id != `color-roof-${getRoofType(api)}-${color}`) {
                clearSelection(out.parentElement.childNodes[i]);
            }
        }

        setRoofColor(color, api);
        updateRoofColors(api, listElement);
        showSelection(out);
        return;
    });
    return out;
};
