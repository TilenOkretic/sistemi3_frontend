import { getDomFromReference } from '../../dom/getters';

/**
 * Disables the refered button dom
 * @param {String||DOM element} btnRef - a reference to the button that will be disabled 
 */
export let disableHTMLButton = (btnRef) => {
    let btn = getDomFromReference(btnRef);

    btn.classList.add('disabled');
    btn.disabled = true;
};
