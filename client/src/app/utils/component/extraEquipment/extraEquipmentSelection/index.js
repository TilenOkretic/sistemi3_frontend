import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';

let clearExtraEquipmentSelection = (id) => {
    let extraEqId = `extra-${id}-btn`;
    clearSelection(extraEqId);
};

let clearExtraEquipmentSelections = (idList) => {
    idList.forEach(e => {
        clearExtraEquipmentSelection(e);
    });
};

let showExtraEquipmentSelection = (id) => {
    let extraEqId = `extra-${id}-btn`;
    showSelection(extraEqId);
};

let showExtraEquipmentSelections = (idList) => {
    idList.forEach(e => {
        showExtraEquipmentSelection(e);
    });
};

export {
    clearExtraEquipmentSelection,
    clearExtraEquipmentSelections,
    showExtraEquipmentSelection,
    showExtraEquipmentSelections,
};
