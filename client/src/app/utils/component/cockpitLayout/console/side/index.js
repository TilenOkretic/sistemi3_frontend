import { clearExtraOption } from '../../../../../../sketchfab_webpack_engine/utils/extrasUtil';
import { disableHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/list/disable';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setCockpitLayout } from '../../../../../config/setters/cockpitLayout';
import { updateConsoleLayout } from '../../../../update/layout/console';
import { getLayoutConsoleSide } from '../side/layout';

export let loadSideConsoleLayout = (api) => {
    
    setCockpitLayout('side', api);

    let [ showReg, hideReg ] = getLayoutConsoleSide(api);

    updateConsoleLayout(api, hideReg, showReg);

    clearSelection(document.querySelector('#console-layout-central'));
    showSelection(document.querySelector('#console-layout-side'));

    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
    clearSelection('extra-rearbenchconfiguration-rearBench-btn');
   
    disableHTMLList('extra-rearbenchconfiguration-btn', 'rearbenchconfiguration-list');

    clearSelection('extra-tableconfiguration-normal');
};
