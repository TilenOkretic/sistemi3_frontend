import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getSideRailType } from '../../../../../config/getters/sideRails';
import { setSideRailType } from '../../../../../config/setters/sideRails';
import { updateSideRails } from '../../../../update/sideRails';

export let addStainlessSteelProfiles = async (api) => {
    if (getSideRailType(api) == 'chrome') return;
    
    let SHPB_BTN = document.querySelector('#extra-siderail-black');
        
    setSideRailType('chrome', api);
    updateSideRails(api);
    clearSelection(SHPB_BTN);
};
