import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createElectricPropulsionButton } from '../../../../utils/component/hullAndmotorization/propulsion/electric/button';
import { createElectricPropulsionList } from '../../../../utils/component/hullAndmotorization/propulsion/electric/list';
import { createMotorPropulsionButton } from '../../../../utils/component/hullAndmotorization/propulsion/motor/button';
import { createMotorPropulsionList } from '../../../../utils/component/hullAndmotorization/propulsion/motor/list';

export default (parent, api) => {

    let ELECTRIC_PROPULSION_LIST = createElectricPropulsionList(api);
    let ELECTRIC_PROPULSION_BUTTON = createElectricPropulsionButton(api);

    let MOTOR_PROPULSION_LIST = createMotorPropulsionList(api);
    let MOTOR_PROPULSION_BUTTON = createMotorPropulsionButton(api);
    
    showSelection(ELECTRIC_PROPULSION_BUTTON);

    parent.addSubElement(ELECTRIC_PROPULSION_BUTTON);
    parent.addSubElement(ELECTRIC_PROPULSION_LIST);
    
    parent.addSubElement(MOTOR_PROPULSION_BUTTON);
    parent.addSubElement(MOTOR_PROPULSION_LIST);
};
