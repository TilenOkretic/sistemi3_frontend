import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getSideRailType } from '../../../../../config/getters/sideRails';
import { setSideRailType } from '../../../../../config/setters/sideRails';
import { updateSideRails } from '../../../../update/sideRails';

export let addFenderProfiles = async (api) => {
    if (getSideRailType(api) == 'black') return;
    
    let SHPC_BTN = document.querySelector('#extra-siderail-chrome');
        
    setSideRailType('black', api);
    updateSideRails(api);
    clearSelection(SHPC_BTN);
};
