import { enableHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/list/enable';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setCockpitLayout } from '../../../../../config/setters/cockpitLayout';
import { setHasGalleyKitchen, setHasRearBench } from '../../../../../config/setters/extraEquipment';
import { updateConsoleLayout } from '../../../../update/layout/console';
import { showLayoutConsoleCentral } from './layout';

export let loadCentralConsoleLayout = (api) => {
    
    setCockpitLayout('central', api);
    setHasRearBench(true, api);
    setHasGalleyKitchen(false, api);

    let [ showReg, hideReg ] = showLayoutConsoleCentral(api); 

    updateConsoleLayout(api, hideReg, showReg);

    clearSelection('console-layout-side');
    showSelection('console-layout-central');
    
    enableHTMLList('extra-rearbenchconfiguration-btn', 'rearbenchconfiguration-list');
    enableHTMLList('extra-tableconfiguration-btn', 'tableconfiguration-list');
    
    showSelection('extra-rearbenchconfiguration-rearBench-btn');
    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
};
