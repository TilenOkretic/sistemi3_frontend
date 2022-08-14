import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { showSelection } from '../../../../../../../sketchfab_webpack_engine/utils/selection';
import { loadElectricInboardMotor } from '../inboard';
import { loadElectricOutboardMotor } from '../outboard';

let composeElectricPopulsionList = (parent, api) => {

    let electricInboardMotor1x = createHTMLButton('motor-1-electric-inboard-btn', 'electricInboardMotor', api);
    electricInboardMotor1x.addEventListener('click', () => loadElectricInboardMotor(api));

    let electricOutboardMotor1x = createHTMLButton('motor-1-electric-outboard-btn', 'electricOutboardMotor', api);
    electricOutboardMotor1x.addEventListener('click', () => loadElectricOutboardMotor(api));

    showSelection(electricInboardMotor1x);
    
    parent.appendChild(electricInboardMotor1x);
    parent.appendChild(electricOutboardMotor1x);
};

export let createElectricPropulsionList = (api) => {
    let list = createHTMLList('electric-propulsion-list');
    addClass(list, 'indent');
    addClass(list, 'flex-column');
    composeElectricPopulsionList(list, api);
    return list;
};
