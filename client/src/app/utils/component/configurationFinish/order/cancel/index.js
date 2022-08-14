import { openConfiguratorMenu } from '../../../../../../sketchfab_webpack_engine/utils/configurationMenu/open';
import { addClass, createElement, removeClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';

let createOrderCancelButton = (api, popupHolder, getCancelButtonSVG) => {
    let cob = createElement('button', 'cancel-order');
    addClass(cob, 'w-4r');
    addClass(cob, 'align-self-end');
    addClass(cob, 'bg-transparent');
    addClass(cob, 'border-none');
    addClass(cob, 'button-hover');
    cob.innerHTML = getCancelButtonSVG;

    cob.addEventListener('click', () => {
        popupHolder.remove();
        openConfiguratorMenu(api);
        removeClass(document.querySelector('#configuration-finish'), 'button-selected');
        api.setUserInteraction(true);
        addClass(document.querySelector('#configuration-finish'), 'on-hover');
    });

    return cob;
};

export {
    createOrderCancelButton,
};
