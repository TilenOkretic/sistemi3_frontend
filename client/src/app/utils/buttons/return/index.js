import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass, removeClass } from '../../../../sketchfab_webpack_engine/utils/dom';
import { openModelSelection } from '../../modelSelectionUtil';

export let createReturnButton = (api) => {
    let wrapper = document.querySelector('#app');

    let translationBtn = createHTMLButton('rts-btn', '', api);
    translationBtn.children[0].remove(); // patch to remove img
    removeClass(translationBtn, 'mt-1');
    addClass(translationBtn, 'position-absolute');
    addClass(translationBtn, 'top-0');
    addClass(translationBtn, 'end-0');
    addClass(translationBtn, 'd-block');
    addClass(translationBtn, 'my-2');
    addClass(translationBtn, 'mx-2');
    addClass(translationBtn, 'text-center');
    addClass(translationBtn, 'bg-transparent');
    addClass(translationBtn, 'border-0');
    addClass(translationBtn, 'on-hover');
    addClass(translationBtn, 'text-capitalize');

    translationBtn.addEventListener('click', ()=>{ openModelSelection(api); });

    wrapper.appendChild(translationBtn);
};
