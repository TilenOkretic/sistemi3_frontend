import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasOutboardMotor, getOutboardMotorCount } from '../../../../config/getters/hullAndMotorization';
import { setHasInboardMotor, setHasOutboardMotor, setMotorThrottle } from '../../../../config/setters/hullAndMotorization';
import { getAllMotorButtonsDOMs } from '../../../dom';

export let loadOutboardMotor = (count, api) => {
    if (getHasOutboardMotor(api) && getOutboardMotorCount(api) == count) return;

    let { outboardMotor1x, outboardMotor2x } = getAllMotorButtonsDOMs();

    removePlatformOption();

    setHasOutboardMotor(true, api);
    setHasInboardMotor(false, api);
    setMotorThrottle(count, api);

    count == 2 && outboardMotor1x ? clearSelection(outboardMotor1x) : count == 1 && outboardMotor2x ? clearSelection(outboardMotor2x) : '';
};
