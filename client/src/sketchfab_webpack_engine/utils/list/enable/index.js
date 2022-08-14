import { enableHTMLButton } from '../../buttons/enable';
import { openHTMLList } from '../../listUtil';


/**
 * Enables and closes the refered list dom
 * @param {String|DOM element} buttonRef - reference to the list display button dom 
 * @param {*} listRef - reference to the list dom
 */
export let enableHTMLList = (buttonRef, listRef) => {
    enableHTMLButton(buttonRef);
    // TODO: implement a getDomListFromReference
    openHTMLList(listRef);
};
