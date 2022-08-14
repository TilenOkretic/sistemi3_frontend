import { disableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/disable';
import { enableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/enable';
import { enableHTMLList } from '../../../../../sketchfab_webpack_engine/utils/list/enable';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasDeckTable, setHasGalleyKitchen } from '../../extraEquipment';
import { setHasStarboardBench } from '../../extraEquipment/starboardBench';

// TODO: move this function
export let setLoungeLayoutConfigs = (api) => {
    setHasGalleyKitchen(false, api);
    setHasStarboardBench(true, api);
    setHasDeckTable(true, api);
    
    enableHTMLList('extra-rearbenchconfiguration-btn', 'rearbenchconfiguration-list');
    enableHTMLList('extra-tableconfiguration-btn', 'tableconfiguration-list');
    
    disableHTMLButton('extra-rearbenchconfiguration-rearBench-btn');
    
    enableHTMLButton('extra-rearbenchconfiguration-starboardBench-btn');
    enableHTMLButton('extra-rearbenchconfiguration-galleyKitchen-btn');
    
    showSelection('extra-rearbenchconfiguration-starboardBench-btn');
    showSelection('extra-tableconfiguration-normal');
    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
};
    
