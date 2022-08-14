import { clearSelection, showSelection } from '../../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setHasElectricPropulsion, setHasMotorPropulsion, setOutboardMotorCount } from '../../../../../../../config/setters/hullAndMotorization';
import { addMotorButton, createMotorButton } from '../../../../../../buttons';
import { removeMotorOptions } from '../../../../../../dom';
import { loadElectricInboardMotor } from '../../inboard';
import { loadElectricOutboardMotor } from '../../outboard';

export let loadElectricPropulsion = (api) => {
    let parent = document.querySelector('#electric-propulsion-btn ');

    let electricInboardMotor1x = createMotorButton(api, 'motor-1-electric-inboard-btn', 'electricInboardMotor', () => loadElectricInboardMotor(api));
    let electricOutboardMotor1x = createMotorButton(api, 'motor-1-electric-outboard-btn', 'electricOutboardMotor', () => loadElectricOutboardMotor(api));

    setElectricInboardEngineCount(1, api);
    setOutboardMotorCount(null, api);
    setHasMotorPropulsion(false, api);
    setHasElectricPropulsion(true, api);

    // so that it loads when first clicking on button
    loadElectricInboardMotor(api);

    removeMotorOptions();
    clearSelection(document.querySelector('#motor-propulsion-btn '));

    addMotorButton(parent, electricInboardMotor1x);
    addMotorButton(parent, electricOutboardMotor1x);

    showSelection(electricInboardMotor1x);
};
