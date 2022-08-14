import { getTranslation } from '../../../languages/getters';
import { addClass, createElement, removeClass } from '../../dom';
import { getIdFromDockItem } from '../item';

/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @param {String} id - title button id 
 * @param {DOMELement} dockElement 
 * @returns HTML buutton element
 */
let createDockTitleButton = (api, id, dockElement) => {
    let b = createElement('button', id);

    addClass(b, 'd-block');
    addClass(b, 'bg-transparent');
    addClass(b, 'border-none');
    addClass(b, 'text-capitalize');
    addClass(b, 'p-1');
    addClass(b, 'h-2');
    addClass(b, 'button-hover');
    addClass(b, 'overflow-hidden');
    addClass(b, 'white-space-nowrap');
    addClass(b, 'text-ellipsis');

    b.disabled = true;
    b.textContent = getTranslation(api, id);
    b.addEventListener('click', () => {
        addClass(b, 'button-selected');
        let dockContent = dockElement.children[1];
        dockContent.classList.contains('d-none') ? 
            dockContent.classList.replace('d-none', 'd-flex') : dockContent.classList.replace('d-flex', 'd-none');
            
        dockContent.classList.contains('d-none') ? removeClass(b, 'button-selected') : '';
        
        let all = document.getElementsByClassName('delm');
        for (let i = 0; i < all.length; i++) {
            const index = getIdFromDockItem(all[i]);
            const dockElementIndex = getIdFromDockItem(dockElement); 
            if (index != dockElementIndex){
                all[index].children[1].classList.replace('d-flex', 'd-none');
                removeClass(all[index].children[0], 'button-selected');
            }
        }
    });

    return b;
};

export {
    createDockTitleButton,
};
