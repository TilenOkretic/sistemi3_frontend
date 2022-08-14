import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { domExists } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { setInboardMotorCount, setMotorization } from '../../../../../config/setters/hullAndMotorization';
import { loadMotorHull } from '../../../../hulls/hullUtil';

let openPlaningList = (api) => {
    if(api.isModelInboard()) {
        setInboardMotorCount(api.isModel23() ? 1 : 2, api)
        setMotorization(api.isModel23() ? '1x inboard': '2x inboard', api);
    };

    loadMotorHull(api);
    domExists('planing-list') ? openHTMLList('planing-list') : '';
    domExists('displacement-list') ? closeHTMLList('displacement-list') : '';
};

export let createPlaningHullButton = (api) => {
    let btn = createHTMLButton('planing-btn', 'hullPlaning', api);
    btn.addEventListener('click', () => openPlaningList(api));
    return btn;
};
