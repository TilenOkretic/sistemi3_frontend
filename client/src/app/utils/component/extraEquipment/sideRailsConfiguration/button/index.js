import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass, removeClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { clearSelection, showSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';

export let createSideRailsButton = (api) => {
    // TODO: image
    let btn = createHTMLButton('extra-siderails', null, api);
    addClass(btn, 'w-100');
    removeClass(btn, 'on-hover');
    showSelection(btn);
    
    btn.addEventListener('click', () => {
        let list = document.querySelector('#siderail-list');
        if(list.classList.contains('d-none')) {
            openHTMLList(list);
        } else {
            closeHTMLList(list);
            clearSelection(btn);
        }
    });
    return btn;
};
