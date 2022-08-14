import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setLayout } from '../../../layout/setters';
import { getPassengerLayout } from './layout';

export let loadPassengerLayout = async (api) => {
    let reg = getPassengerLayout(api);

    setLayout(api, 'passenger', reg);

    clearSelection('cockpit-layout-standard');
    clearSelection('cockpit-layout-lounge');
    showSelection('cockpit-layout-passenger');
};
