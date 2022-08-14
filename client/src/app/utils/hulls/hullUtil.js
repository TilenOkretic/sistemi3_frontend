import { showElement } from '../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../sketchfab_webpack_engine/utils/selection';
import { getRegexForHullDisplacement } from '../../regexLib/hull/displacement';
import { getRegexForHullPlaning } from '../../regexLib/hull/planing';
import { getRegexForDisplacementInboardMotorsByCount } from '../../regexLib/motorization/displacement';
import { getRegexForInboardMotorByCount  } from '../../regexLib/motorization/planing';
import { hideAllHullAndMotors } from '../dictionary/boatDictionaryUtil';
import { getIsHullElectric, getIsHullMotor } from '../../config/getters/hullAndMotorization';
import { setElectricInboardEngineCount, setHasInboardMotor, setHasOutboardMotor, setHullType, setInboardMotorCount, setOutboardMotorCount } from '../../config/setters/hullAndMotorization';

let loadElectricHull = (api) => {

    if (getIsHullElectric(api)) return;

    setHullType('electric', api);

    setHasOutboardMotor(false, api);
    setHasInboardMotor(false, api);
    setOutboardMotorCount(null, api);
    setInboardMotorCount(null, api);
    
    hideAllHullAndMotors(api);
    showElement(getRegexForHullDisplacement(), api);
    showElement(getRegexForDisplacementInboardMotorsByCount(api), api);
    
    clearSelection(document.getElementById('planing-btn'));
};

let loadMotorHull = (api) => {
    
    if (getIsHullMotor(api)) return;
    
    
    if (api.isModelInboard()) {
        setHasInboardMotor(true, api);
    }

    setElectricInboardEngineCount(null, api);

    hideAllHullAndMotors(api);
    showElement(getRegexForHullPlaning(), api);
    showElement(getRegexForInboardMotorByCount(api), api);

    setHullType('motor', api);
    
    clearSelection(document.getElementById('displacement-btn'));
};

export {
    loadElectricHull,
    loadMotorHull
};
