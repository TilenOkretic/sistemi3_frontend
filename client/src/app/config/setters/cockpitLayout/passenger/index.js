import { disableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/disable';
import { disableHTMLList } from '../../../../../sketchfab_webpack_engine/utils/list/disable';
import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setHasDeckTable, setHasGalleyKitchen } from '../../extraEquipment';
import { setHasStarboardBench } from '../../extraEquipment/starboardBench';

// TODO: move this function
export let setPassengerLayoutConfigs = (api) => {
    setHasGalleyKitchen(false, api);
    setHasDeckTable(false, api); 
    setHasStarboardBench(false, api); 
    
    clearSelection('extra-rearbenchconfiguration-galleyKitchen-btn');
    clearSelection('extra-rearbenchconfiguration-rearBench-btn');
    
    disableHTMLList('extra-rearbenchconfiguration-btn', 'rearbenchconfiguration-list');
    disableHTMLButton('extra-rearbenchconfiguration-galleyKitchen-btn');
    disableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');

    disableHTMLList('extra-tableconfiguration-btn', 'tableconfiguration-list');
    clearSelection('extra-tableconfiguration-loungeLayout');
};
