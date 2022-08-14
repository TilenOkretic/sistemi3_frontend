import { hideElement, showElementList } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { disableHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons/disable';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getInnerCushioning, getOuterCushioning } from '../../../../../config/getters/upholstery';
import { setHasGalleyKitchen } from '../../../../../config/setters/extraEquipment';
import { getRegexForGalleyKitchenFront } from '../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForCoDirverSeatPiping } from '../../../../../regexLib/piping/cockpitLayout';

export let loadCodriverSeat = (api) => {
    setHasGalleyKitchen(false, api);
    hideElement(getRegexForGalleyKitchenFront(), api);
    showElementList([
        `cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`,
        `cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`,
        getRegexForCoDirverSeatPiping(),
    ], api);
    disableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');
    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
    clearSelection('extra-rearbenchconfiguration-codriverSeat-btn');
};
