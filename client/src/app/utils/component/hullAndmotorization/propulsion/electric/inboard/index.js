import { hideElementList, showElementList } from '../../../../../../../sketchfab_webpack_engine/dictionary/model';
import { domExists } from '../../../../../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection } from '../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setElectricOutboardEngineCount, setHasInboardMotor, setHasOutboardMotor, setMotorization } from '../../../../../../config/setters/hullAndMotorization';
import { getRegexForRearPlatform21Color } from '../../../../../../regexLib/bathingPlatform/model21/color';
import { getRegexForRearPlatformSideRail } from '../../../../../../regexLib/sideRails/bathingPlatform';

export let loadElectricInboardMotor = (api) => {
        
    setElectricOutboardEngineCount(0, api);
    setElectricInboardEngineCount(1, api);
    setHasOutboardMotor(false, api);
    setHasInboardMotor(true, api);
    
    setMotorization('1x electric-inboard', api);
    
    let showReg = [
        'motorDisplacement.inboard.1x',
        getRegexForRearPlatform21Color(api),
        getRegexForRearPlatformSideRail(api)
    ];
   
    let hideReg = [
        'motorPlaning.outboard.1x',
        'motorElectric.outboard.1x'
    ];

    hideElementList(hideReg, api);
    showElementList(showReg, api);
    
    domExists('motor-1-electric-outboard-btn') ? clearSelection('motor-1-electric-outboard-btn') : '';
    domExists('motor-1-motor-outboard-btn') ? clearSelection('motor-1-motor-outboard-btn') : '';
};
