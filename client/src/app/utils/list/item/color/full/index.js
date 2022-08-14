import { getFullColorsListItemId, getLowerColorListItemId, getUpperColorListItemId } from '..';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setHullDeckColor } from '../../../../../config/setters/colorSelection';

let loadFullColors = (color, api) => {
    let hideFullColorListItem = getFullColorsListItemId(api); 
    let hideDeckColorListItem = getUpperColorListItemId(api);
    let hideHullColorListItem = getLowerColorListItemId(api);
    clearSelection(hideFullColorListItem, hideDeckColorListItem, hideHullColorListItem);

    setHullDeckColor(color, api);
    let showFullColorListItem = getFullColorsListItemId(api);
    let showDeckColorListItem = getUpperColorListItemId(api);
    let showHullColorListItem = getLowerColorListItemId(api);
    showSelection(showFullColorListItem, showDeckColorListItem, showHullColorListItem);
};

export {
    loadFullColors,
};

