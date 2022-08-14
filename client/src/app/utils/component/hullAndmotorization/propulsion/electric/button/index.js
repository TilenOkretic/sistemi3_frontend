import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { closeHTMLList, openHTMLList } from '../../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection, showSelection } from '../../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setHasElectricPropulsion, setHasMotorPropulsion, setMotorization, setOutboardMotorCount } from '../../../../../../config/setters/hullAndMotorization';
import { loadElectricInboardMotor } from '../inboard';

let openElectricPropulsionList = (api) => {
    setElectricInboardEngineCount(1, api);
    setOutboardMotorCount(null, api);
    setHasMotorPropulsion(false, api);
    setHasElectricPropulsion(true, api);
    
    setMotorization('1x electric-inboard', api);

    // so that it loads when first clicking on button
    loadElectricInboardMotor(api);

    clearSelection(document.querySelector('#motor-propulsion-btn'));
    showSelection('motor-1-electric-inboard-btn');
    
    openHTMLList('electric-propulsion-list');
    closeHTMLList('motor-propulsion-list');
};

export let createElectricPropulsionButton = (api) => {
    let b = createHTMLButton('electric-propulsion-btn', 'propulsionElectric', api);
    b.addEventListener('click', () => openElectricPropulsionList(api));
    return b;
};
