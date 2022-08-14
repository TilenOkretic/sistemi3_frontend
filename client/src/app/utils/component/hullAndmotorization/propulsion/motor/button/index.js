import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { closeHTMLList, openHTMLList } from '../../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection, showSelection } from '../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setHasElectricPropulsion, setHasMotorPropulsion, setMotorization } from '../../../../../../config/setters/hullAndMotorization';
import { loadMotorPropulsionOutboardMotor } from '../outboard';

let openMotorPropulsionList = (api) => {
    setElectricInboardEngineCount(null, api);
    setHasElectricPropulsion(false, api);
    setHasMotorPropulsion(true, api);

    setMotorization('1x outboard', api);

    // this is because we load the motor right on click
    loadMotorPropulsionOutboardMotor(api);

    clearSelection(document.querySelector('#electric-propulsion-btn'));

    showSelection('motor-1-motor-outboard-btn');
    
    openHTMLList('motor-propulsion-list');
    closeHTMLList('electric-propulsion-list');
};

export let createMotorPropulsionButton = (api) => {
    let btn = createHTMLButton('motor-propulsion-btn', 'propulsionMotor', api);
    btn.addEventListener('click', () => openMotorPropulsionList(api));
    return btn;
};
