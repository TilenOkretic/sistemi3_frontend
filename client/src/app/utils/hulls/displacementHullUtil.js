import { showElement } from '../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../sketchfab_webpack_engine/utils/selection';
import { getElectricInboardEngineCount } from '../../config/getters/hullAndMotorization';
import { setElectricInboardEngineCount, setMotorThrottle } from '../../config/setters/hullAndMotorization';
import { getRegexForHullDisplacement } from '../../regexLib/hull/displacement';
import { getRegexForDisplacementInboardMotorsByCount } from '../../regexLib/motorization/displacement';
import { getAllMotorButtonsDOMs } from '../dom';
import { hideAllHullAndMotors } from '../dictionary/boatDictionaryUtil';


let displacementMotor = (api, count) => {
    if (getElectricInboardEngineCount(api) == count) return;

    let { displacementInboardMotor1x, displacementInboardMotor2x } = getAllMotorButtonsDOMs();

    setElectricInboardEngineCount(count, api);
    setMotorThrottle(count, api);

    hideAllHullAndMotors(api);
    showElement(getRegexForHullDisplacement(), api);
    showElement(getRegexForDisplacementInboardMotorsByCount(api), api);

    count == 2 && displacementInboardMotor1x ? 
        clearSelection(displacementInboardMotor1x) :
        count == 1 && displacementInboardMotor2x ? 
            clearSelection(displacementInboardMotor2x) : '';
};

export {
    displacementMotor,
};
