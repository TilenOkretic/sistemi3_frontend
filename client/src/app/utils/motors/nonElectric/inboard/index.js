import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasInboardMotor, getInboardMotorCount } from '../../../../config/getters/hullAndMotorization';
import { setHasInboardMotor, setHasOutboardMotor, setInboardMotorCount, setMotorThrottle } from '../../../../config/setters/hullAndMotorization';
import { getRegexForHullPlaning } from '../../../../regexLib/hull/planing';
import { getRegexForInboardMotorByCount } from '../../../../regexLib/motorization/planing';
import { hideAllHullAndMotors } from '../../../dictionary/boatDictionaryUtil';
import { getAllMotorButtonsDOMs } from '../../../dom';

export let loadInboardMotor = (count, api) => {
    if (getHasInboardMotor(api) && getInboardMotorCount(api) == count) return;

    let { inboardMotor1x, inboardMotor2x } = getAllMotorButtonsDOMs();

    setInboardMotorCount(count, api);

    setHasOutboardMotor(false, api);
    setHasInboardMotor(true, api);
    setMotorThrottle(count, api);

    hideAllHullAndMotors(api);
    showElement(getRegexForHullPlaning(), api);
    showElement(getRegexForInboardMotorByCount(api), api);

    count == 2 && inboardMotor1x ? clearSelection(inboardMotor1x) : count == 1 && inboardMotor2x ? clearSelection(inboardMotor2x) : '';
};
