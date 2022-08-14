import { getDomFromReference } from '../../dom/getters';

/**
 * Enables the refered button dom
 * @param {String|DOM element} btnRef - reference to the button dom element to be enabled 
 */
export let enableHTMLButton = (btnRef) => {
    let btn = getDomFromReference(btnRef);
    btn.classList.remove('disabled');
    btn.disabled = false;
};
