import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, createHTMLList } from '../../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { loadMotorPropulsionOutboardMotor } from '../outboard';

let composeMotorPropulsionList = (parent, api) => {
    let motorOutboardMotor1x = createHTMLButton('motor-1-motor-outboard-btn', 'motorOutboardMotor', api);
    motorOutboardMotor1x.addEventListener('click', () => loadMotorPropulsionOutboardMotor(api));
    parent.appendChild(motorOutboardMotor1x);
};

export let createMotorPropulsionList = (api) => {
    let list = createHTMLList('motor-propulsion-list');
    addClass(list, 'indent');
    addClass(list, 'flex-column');
    composeMotorPropulsionList(list, api);
    closeHTMLList(list);
    return list;
};
