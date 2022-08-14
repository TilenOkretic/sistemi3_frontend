import { disableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/disable';
import { enableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/enable';
import { showExtraOption } from '../../../../../sketchfab_webpack_engine/utils/extrasUtil';
import { enableHTMLList } from '../../../../../sketchfab_webpack_engine/utils/list/enable';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasDeckTable, setHasGalleyKitchen, setHasRearBench } from '../../extraEquipment';
import { setHasStarboardBench } from '../../extraEquipment/starboardBench';

// TODO: move this function
export let setStandardLayoutConfigs = (api) => {
    setHasRearBench(true, api);
    setHasDeckTable(true, api);
    setHasGalleyKitchen(false, api);
    setHasStarboardBench(true, api);
    
    enableHTMLList('extra-rearbenchconfiguration-btn', 'rearbenchconfiguration-list');
    enableHTMLList('extra-tableconfiguration-btn', 'tableconfiguration-list');

    enableHTMLButton('extra-rearbenchconfiguration-rearBench-btn');
    showSelection('extra-rearbenchconfiguration-rearBench-btn');

    disableHTMLButton('extra-rearbenchconfiguration-starboardBench-btn');
    disableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');

    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
    clearSelection('extra-tableconfiguration-loungeLayout');
    showSelection('extra-tableconfiguration-normal');

    api.isModelCabin() ? showExtraOption('mch') : '';
};
