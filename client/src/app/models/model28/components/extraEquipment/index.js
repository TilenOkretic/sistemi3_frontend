import { disableHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons/disable';
import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { addCockpitExtra } from '../../../../utils/component/extraEquipment';
import { createRearBenchConfigurationButton } from '../../../../utils/component/extraEquipment/rearBenchConfiguration/button';
import { createRearBenchConfigurationList } from '../../../../utils/component/extraEquipment/rearBenchConfiguration/list';

export default (parent, api) => {
    let REARBENCH_CONFIGURATION_BUTTON = createRearBenchConfigurationButton(api);
    let REARBENCH_CONFIGURATION_LIST = createRearBenchConfigurationList(api);
    
    let DKT_BTN = addCockpitExtra('dkt', api);
    let BSC_BTN = addCockpitExtra('bsc', api);

    let FGR_BTN = addCockpitExtra('fgr', api);
    let MCH_BTN = addCockpitExtra('mch', api);
    let SUNBED_TENT_BUTTON = addCockpitExtra('snbd-tent', api);

    parent.addSubElement(REARBENCH_CONFIGURATION_BUTTON);
    parent.addSubElement(REARBENCH_CONFIGURATION_LIST);

    parent.addSubElement(DKT_BTN);
    parent.addSubElement(BSC_BTN);

    parent.addSubElement(FGR_BTN);
    parent.addSubElement(MCH_BTN);
    parent.addSubElement(SUNBED_TENT_BUTTON);

    showSelection('extra-rearbenchconfiguration-rearBench-btn');
    disableHTMLButton('extra-rearbenchconfiguration-starboardBench-btn');
    disableHTMLButton('extra-rearbenchconfiguration-codriverSeat-btn');
    showSelection(DKT_BTN);
    showSelection(FGR_BTN);
    showSelection(MCH_BTN);
};
