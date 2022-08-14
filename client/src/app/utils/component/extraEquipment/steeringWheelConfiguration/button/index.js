import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';

export let createSteeringWheelButton = (api) => {
    // TODO: image
    let btn = createHTMLButton('extra-steeringwheel', null, api);
    addClass(btn, 'w-100');
    btn.addEventListener('click', () => {
        let list = document.querySelector('#steeringwheel-list');
        if(list.classList.contains('d-none')) {
            openHTMLList(list);
        } else {
            closeHTMLList(list);
            clearSelection(btn);
        }
    });
    return btn;
};
