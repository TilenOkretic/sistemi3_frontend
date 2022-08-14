import { hideElementList, showElementList } from '../../../../../../../sketchfab_webpack_engine/dictionary/model';
import { domExists } from '../../../../../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection } from '../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setElectricOutboardEngineCount, setHasInboardMotor, setHasOutboardMotor, setMotorization } from '../../../../../../config/setters/hullAndMotorization';
import { getRegexForRearPlatform21 } from '../../../../../../regexLib/bathingPlatform/model21';

export let loadElectricOutboardMotor = (api) => {

    setElectricInboardEngineCount(0, api);
    setElectricOutboardEngineCount(1, api);
    setHasInboardMotor(false, api);
    setHasOutboardMotor(true, api);

    setMotorization('1x electric-outboard', api);

    let showReg = [ 'motorElectric.outboard.1x' ];
    
    let hideReg = [ 'motorDisplacement.inboard.1x', ...getRegexForRearPlatform21(api) ];
    
    hideElementList(hideReg, api);
    showElementList(showReg, api);

    domExists('motor-1-electric-inboard-btn') ? clearSelection('motor-1-electric-inboard-btn') : '';
    domExists('motor-1-motor-outboard-btn') ? clearSelection('motor-1-motor-outboard-btn') : '';
};
