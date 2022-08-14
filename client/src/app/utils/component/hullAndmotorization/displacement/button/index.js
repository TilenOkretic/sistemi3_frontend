import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { setElectricInboardEngineCount, setMotorization } from '../../../../../config/setters/hullAndMotorization';
import { loadElectricHull } from '../../../../hulls/hullUtil';

let openDisplacementList = (api) => {
    setElectricInboardEngineCount(1, api);
    setMotorization('1x electric-inboard', api)
    loadElectricHull(api);

    clearSelection('motor-displacement-2-inboard-btn');
    showSelection('motor-displacement-1-inboard-btn');

    openHTMLList('displacement-list');
    closeHTMLList('planing-list');
};

export let createDisplacementHullButton = (api) => {
    let b = createHTMLButton('displacement-btn', 'hullDisplacement', api);
    b.addEventListener('click', () => openDisplacementList(api));
    return b;    
};
