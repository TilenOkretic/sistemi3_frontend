import { clearSelection, showSelection } from '../../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setHasElectricPropulsion, setHasMotorPropulsion } from '../../../../../../../config/setters/hullAndMotorization';
import { addMotorButton, createMotorButton } from '../../../../../../buttons';
import { removeMotorOptions } from '../../../../../../dom';
import { loadMotorPropulsionOutboardMotor } from '../../outboard';

export let loadMotorPropulsion = (api) => {
    let parent = document.querySelector('#motor-propulsion-btn ');

    let motorOutboardMotor1x = createMotorButton(api, 'motor-1-motor-outboard-btn', 'motorOutboardMotor', () => loadMotorPropulsionOutboardMotor(api));

    setElectricInboardEngineCount(null, api);
    setHasElectricPropulsion(false, api);
    setHasMotorPropulsion(true, api);

    // this is because we load the motor right on click
    loadMotorPropulsionOutboardMotor(api);

    removeMotorOptions();
    clearSelection(document.querySelector('#electric-propulsion-btn '));

    addMotorButton(parent, motorOutboardMotor1x);
    showSelection(motorOutboardMotor1x);
};
