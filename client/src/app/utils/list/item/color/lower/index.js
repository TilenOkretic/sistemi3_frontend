import { getFullColorsListItemId, getLowerColorListItemId, getOppositeHull, getUpperColorListItemId } from '..';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getDeckColor, getHullColor } from '../../../../../config/getters/colorSelection';
import { setDeckHullColorBasedOnType } from '../../../../../config/setters/colorSelection';

let colorHullPrefix = 'color-hull';

let hideCurrentColorListItemMap = {
    'lower': (api) => getLowerColorListItemId(api),
    'upper': (api) => getUpperColorListItemId(api),
};

let hideOppositeListItemMap = {
    'lower': (api) => `${colorHullPrefix}-${getOppositeHull('lower')}-${getDeckColor(api)}`,
    'upper': (api) => `${colorHullPrefix}-${getOppositeHull('upper')}-${getHullColor(api)}`,
};

let showColorListItemMap = {
    'upper': (api) => `${colorHullPrefix}-upper-${getDeckColor(api)}`,
    'lower': (api) => `${colorHullPrefix}-lower-${getHullColor(api)}`, 
};

let loadLowerColors = (color, type, api) => {
    let hideCurrentColorListItemId = hideCurrentColorListItemMap[type](api); 
    let hideOppositeColorListItemId = hideOppositeListItemMap[type](api);
    let hideColorFullListItemId = getFullColorsListItemId(api); 
    clearSelection(hideCurrentColorListItemId, hideOppositeColorListItemId, hideColorFullListItemId);

    setDeckHullColorBasedOnType(type, color, api);
    showSelection(showColorListItemMap[type](api));
};

export {
    loadLowerColors,
};
