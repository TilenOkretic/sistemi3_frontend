import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setLayout } from '../../../layout/setters';
import { getLoungeLayout } from './layout';

export let loadLoungeLayout = (api) => {
    
    let reg = getLoungeLayout(api);

    setLayout(api, 'lounge', reg);

    clearSelection('cockpit-layout-standard');
    clearSelection('cockpit-layout-passenger');
    showSelection('cockpit-layout-lounge');
};
