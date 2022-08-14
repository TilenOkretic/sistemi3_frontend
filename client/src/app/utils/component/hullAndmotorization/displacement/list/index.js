import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { displacementMotor } from '../../../../hulls/displacementHullUtil';

let composeDisplacementList = (parent, api) => {

    let displacementInboardMotor1x = createHTMLButton('motor-displacement-1-inboard-btn', 'displacementInboardMotor', api);
    displacementInboardMotor1x.addEventListener('click', () => displacementMotor(api, 1));

    let displacementInboardMotor2x = createHTMLButton('motor-displacement-2-inboard-btn', 'displacementInboardMotor2', api);
    displacementInboardMotor2x.addEventListener('click', () => displacementMotor(api, 2));

    parent.appendChild(displacementInboardMotor1x);
    parent.appendChild(displacementInboardMotor2x);
};

export let createDisplacementList = (api) => {
    let list = createHTMLList('displacement-list');
    addClass(list, 'indent');
    addClass(list, 'flex-column');
    composeDisplacementList(list, api);
    closeHTMLList(list);
    return list;
};
