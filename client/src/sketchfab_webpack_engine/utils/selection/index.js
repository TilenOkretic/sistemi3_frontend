import { addClass, removeClass, replaceClass } from '../dom';
import { getDomFromReference } from '../dom/getters';

/**
 * 
 * @param {DomElement | String} domRef
 * @returns 
 */
let showSelection = (domRef) => {
    if (domRef instanceof Array) {
        domRef.forEach(e => {
            showSelection(e);
        });
    } else {
        let dom = getDomFromReference(domRef);
        addClass(dom, 'bold');
        for (let i = 0; i < dom.children.length; i++) {
            const domChild = dom.children[i];
            replaceClass(domChild, 'on-hover', 'on-hover-dis');
        }
    }
};

/**
 * 
 * @param {DOM Element | String | Array} domRef 
 * @returns
 */
let clearSelection = (domRef) => {

    if(domRef instanceof Array) {
        domRef.forEach(e => {
            clearSelection(e);
        });
    } else {
        let fItem = getDomFromReference(domRef);
        fItem.classList.contains('bold') ? removeClass(fItem, 'bold') : '';
        removeClass(fItem.parentElement, 'bold');
        for (let i = 0; i < fItem.children.length; i++) {
            const domChild = fItem.children[i];
            replaceClass(domChild, 'on-hover-dis', 'on-hover');
        }
    }
};

// let clearSelections = (... id) => {
//     id.forEach(e => {
//         clearSelection(e);
//     });
// };

// let showSelections = (... id) => {
//     id.forEach(e => {
//         showSelection(e);
//     });
// };

export {
    showSelection,
    clearSelection,
};
