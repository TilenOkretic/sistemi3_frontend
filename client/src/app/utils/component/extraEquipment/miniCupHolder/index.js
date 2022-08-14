import { hideElement, showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasMiniCupHolder } from '../../../../config/getters/extraEquipment';
import { setHasMiniCupHolder } from '../../../../config/setters/extraEquipment';
import { getRegexForMiniCupHolder } from '../../../../regexLib/extraEquipment/miniCupHolder';

export let addMiniCupHolder = async (api) => {
    let MCH_BTN = document.querySelector('#extra-mch-btn');
    
        
    getHasMiniCupHolder(api) ? hideElement(getRegexForMiniCupHolder(api), api) : showElement(getRegexForMiniCupHolder(api), api); 
    setHasMiniCupHolder(!getHasMiniCupHolder(api), api);
    !getHasMiniCupHolder(api) ? clearSelection(MCH_BTN) : showSelection(MCH_BTN);
};
