import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setLayout } from '../../../layout/setters';
import { getStandardLayout } from './layout';

export let loadStandardLayout = async (api) => {
    
    let reg = getStandardLayout(api);
    
    setLayout(api, 'standard', reg);

    clearSelection('cockpit-layout-passenger');
    clearSelection('cockpit-layout-lounge');
    showSelection('cockpit-layout-standard');
};
