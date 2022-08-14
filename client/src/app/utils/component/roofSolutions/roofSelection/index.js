import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';

let clearRoofSelections = (idList) => {
    idList.forEach(e => {
        clearRoofSelection(e);
    });
};

let clearRoofSelection = (id) => {
    let roofSelectionId = `roofSolutions-${id}-btn`;
    clearSelection(roofSelectionId);
};

export {
    clearRoofSelection,
    clearRoofSelections
};
