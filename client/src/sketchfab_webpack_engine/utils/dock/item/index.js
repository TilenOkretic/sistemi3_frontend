import { addClass, createElement } from '../../dom';

/**
 * 
 * @param {DOMElement} btnHolder 
 * @returns HTML div element
 */
let createDockItemContent = (btnHolder) => {
    let dic = createElement('div', 'dock-item-content');
    dic.className = 'dock-item-content';
    addClass(dic, 'd-none');
    dic.appendChild(btnHolder);
    return dic;
};

/**
 * 
 * @param {DOMElement} dockItem 
 * @returns string id of the dock element
 */
let getIdFromDockItem = (dockItem) => dockItem.id.split('-')[2];

export {
    createDockItemContent,
    getIdFromDockItem,
};
