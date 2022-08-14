import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass, removeClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';

export let createRearBenchConfigurationButton = (api) => {
    // TODO: image
    let btn = createHTMLButton('extra-rearbenchconfiguration-btn', null, api);
    addClass(btn, 'w-100');
    removeClass(btn, 'on-hover');
    
    btn.addEventListener('click', () => {
        let list = document.querySelector('#rearbenchconfiguration-list');
        if(list.classList.contains('d-none')) {
            openHTMLList(list);
        } else {
            closeHTMLList(list);
            clearSelection(btn);
        }
    });
    return btn;
};
