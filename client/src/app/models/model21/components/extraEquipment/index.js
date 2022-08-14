import { removeDom } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { addCockpitExtra } from '../../../../utils/component/extraEquipment';
import { createRearBenchConfigurationButton } from '../../../../utils/component/extraEquipment/rearBenchConfiguration/button';
import { createRearBenchConfigurationList } from '../../../../utils/component/extraEquipment/rearBenchConfiguration/list';
import { createSideRailsButton } from '../../../../utils/component/extraEquipment/sideRailsConfiguration/button';
import { createSideRailsList } from '../../../../utils/component/extraEquipment/sideRailsConfiguration/list';
import { createSteeringWheelButton } from '../../../../utils/component/extraEquipment/steeringWheelConfiguration/button';
import { createSteeringWheelConfigurationList } from '../../../../utils/component/extraEquipment/steeringWheelConfiguration/list';
import { createTableConfigurationButton } from '../../../../utils/component/extraEquipment/tableConfiguration/button';
import { createTableConfigurationList } from '../../../../utils/component/extraEquipment/tableConfiguration/list';

export default (parent, api) => {
    let REARBENCH_CONFIGURATION_LIST = createRearBenchConfigurationList(api);
    let REARBENCH_CONFIGURATION_BUTTON = createRearBenchConfigurationButton(api);

    let TABLE_CONFIGURATION_BUTTON = createTableConfigurationButton(api);
    let TABLE_CONFIGURATION_LIST = createTableConfigurationList(api);
    // DEPRICATED: moved to tableConfiguration
    // let DKT_BTN = addCockpitExtra('dkt', api);
    
    let SIDE_RAILS_LIST = createSideRailsList(api);
    let SIDE_RAILS_BUTTON = createSideRailsButton(api);
    
    let MCH_BTN = addCockpitExtra('mch', api);
    
    let STEERING_WHEEL_LIST = createSteeringWheelConfigurationList(api);
    let STEERING_WHEEL_BUTTON = createSteeringWheelButton(api);
    
    let WDS_BTN = addCockpitExtra('wds', api);
    let ADS_BTN = addCockpitExtra('ads', api);
    let MAC_BTN = addCockpitExtra('mac', api);

    parent.addSubElement(REARBENCH_CONFIGURATION_BUTTON);
    parent.addSubElement(REARBENCH_CONFIGURATION_LIST);
    
    parent.addSubElement(TABLE_CONFIGURATION_BUTTON);
    parent.addSubElement(TABLE_CONFIGURATION_LIST);

    parent.addSubElement(SIDE_RAILS_BUTTON);
    parent.addSubElement(SIDE_RAILS_LIST);
    
    parent.addSubElement(MCH_BTN);
    
    parent.addSubElement(STEERING_WHEEL_BUTTON);
    parent.addSubElement(STEERING_WHEEL_LIST);

    parent.addSubElement(WDS_BTN);
    parent.addSubElement(ADS_BTN);
    parent.addSubElement(MAC_BTN);

    showSelection('extra-rearbenchconfiguration-rearBench-btn');
    removeDom('extra-rearbenchconfiguration-starboardBench-btn');
    removeDom('extra-rearbenchconfiguration-codriverSeat-btn');
    showSelection('extra-siderail-chrome');
    showSelection('extra-steeringwheel-rubber'); 
    showSelection('extra-tableconfiguration-normal');
    
    showSelection(WDS_BTN); 
};
