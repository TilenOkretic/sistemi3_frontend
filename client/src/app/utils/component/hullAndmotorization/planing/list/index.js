import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasInboardMotor, getHasOutboardMotor, getInboardMotorCount, getOutboardMotorCount } from '../../../../../config/getters/hullAndMotorization';
import { loadInboardMotor } from '../../../../motors/nonElectric/inboard';
import { loadOutboardMotor } from '../../../../motors/nonElectric/outboard';

let composePlaningList = (parent, api) => {
    if (getHasOutboardMotor(api)) {
        if (getOutboardMotorCount(api) == 1) {
            let outboardMotor1x = createHTMLButton('motor-planing-1-outboard-btn', 'outboardMotor', api);
            outboardMotor1x.addEventListener('click', () => loadOutboardMotor(1, api));
            parent.appendChild(outboardMotor1x);
            showSelection(outboardMotor1x);
        }
        
        if(getOutboardMotorCount(api) == 2 && api.isModel32()) {
            let outboardMotor2x = createHTMLButton('motor-planing-2-outboard-btn', 'outboardMotor2', api);
            outboardMotor2x.addEventListener('click', () => loadOutboardMotor(2, api));
            parent.appendChild(outboardMotor2x);
            showSelection(outboardMotor2x);
        }
    } else if(getHasInboardMotor(api)) {
        if (getInboardMotorCount(api) == 1) {
            let inboardMotor1x = createHTMLButton('motor-planing-1-inboard-btn', 'inboardMotor', api);
            inboardMotor1x.addEventListener('click', () => loadInboardMotor(1, api));
            parent.appendChild(inboardMotor1x);
            showSelection(inboardMotor1x);
        } 

        if (getInboardMotorCount(api) == 2 && api.isModel28()) {
            let inboardMotor2x = createHTMLButton('motor-planing-2-inboard-btn', 'inboardMotor2', api);
            inboardMotor2x.addEventListener('click', () => loadInboardMotor(2, api));
            parent.appendChild(inboardMotor2x);
            showSelection(inboardMotor2x);
        }
    }
};

export let createPlaningList = (api) => {
    let list = createHTMLList('planing-list');
    addClass(list, 'indent');
    addClass(list, 'flex-column');
    composePlaningList(list, api);
    return list;
};
