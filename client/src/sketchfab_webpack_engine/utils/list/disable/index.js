import { disableHTMLButton } from '../../buttons/disable';
import { closeHTMLList } from '../../listUtil';

/**
 * Disables and closes the refered list dom
 * @param {String|DOM element} buttonRef - reference to the list display button dom 
 * @param {*} listRef - reference to the list dom
 */
export let disableHTMLList = (buttonRef, listRef) => {
    disableHTMLButton(buttonRef);
    // TODO: implement a getDomListFromReference
    closeHTMLList(listRef);
};
