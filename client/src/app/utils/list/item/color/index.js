import { createListItem } from '../../../../../sketchfab_webpack_engine/utils/list/item';
import { getDeckColor, getHullColor } from '../../../../config/getters/colorSelection';
import { hideAllBodyColors } from '../../../dictionary/boatDictionaryUtil';
import { updateBoatColors } from '../../../update/boatColors';
import { loadFullColors } from './full';
import { loadLowerColors } from './lower';
import { loadUpperColors } from './upper';

let getUpperColorListItemId = (api) => `color-hull-upper-${getDeckColor(api)}`;
let getLowerColorListItemId = (api) => `color-hull-lower-${getHullColor(api)}`;
let getFullColorsListItemId = (api) => `color-hull-full-${getDeckColor(api)}`;
let getOppositeHull = (type) => type == 'lower' ? 'upper' : 'lower';

let listItemFunctionMap = {
    'full':  (color, api) => loadFullColors(color, api),
    'lower': (color, api) => loadLowerColors(color, 'lower', api),
    'upper': (color, api) => loadUpperColors(color, 'upper', api),
};

let createHullColorListItem = (type, color, api) => {

    let colorImg = `${color}`;

    let out = createListItem(`color-hull-${type}-${color}`, type, colorImg, api, () => {
        hideAllBodyColors(api);
        listItemFunctionMap[type](color, api);
        updateBoatColors(api);
    });

    return out;
};

export {
    getLowerColorListItemId,
    getUpperColorListItemId,
    getFullColorsListItemId,
    getOppositeHull,
    createHullColorListItem,
};
