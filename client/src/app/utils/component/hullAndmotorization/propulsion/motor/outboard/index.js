import { hideElementList, showElement } from '../../../../../../../sketchfab_webpack_engine/dictionary/model';
import { setElectricInboardEngineCount, setElectricOutboardEngineCount, setHasInboardMotor, setHasOutboardMotor, setMotorization, setOutboardMotorCount } from '../../../../../../config/setters/hullAndMotorization';
import { getRegexForRearPlatform21 } from '../../../../../../regexLib/bathingPlatform/model21';

export let loadMotorPropulsionOutboardMotor = (api) => {
    let hideElem = [ 'motorDisplacement.inboard.1x', 'motorElectric.outboard.1x' ];
    hideElem = [ ...hideElem, ...getRegexForRearPlatform21(api) ];
    
    setElectricInboardEngineCount(0, api);
    setElectricOutboardEngineCount(0, api);
    setOutboardMotorCount(1, api);
    setHasInboardMotor(false, api);
    setHasOutboardMotor(true, api);

    setMotorization('1x outboard', api);

    showElement('motorPlaning.outboard.1x', api);
    hideElementList(hideElem, api);
};
