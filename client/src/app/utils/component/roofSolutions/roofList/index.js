import { addClass, createElement } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { createRoofListItem } from '../../../list/item/roof';

let composeTTOPList = (parent, api) => {
        
    let color;
    for( let key in api.componentDictionary ) {
        if (key.includes('roof.')  && !key.includes('sideRails') && !key.includes('logo')) {
            if (key.includes('roof.') && key.includes('Ttop') && !key.includes('sideRails') && !key.includes('logo'))  {
                color = key.split('.')[2];
                parent.appendChild(createRoofListItem('ttop', color, api));
            }
        }
    }
};

let composeHHTList = (parent, api) => {        
    let color;
    for( let key in api.componentDictionary ) {
        if (key.includes('roof.')  && !key.includes('sideRails') && !key.includes('logo')) {
            if(!key.includes('Ttop')) {
                color = key.split('.')[1];
                parent.appendChild(createRoofListItem('hht', color, api));
            }
        }
    }
};

let createRoofColorList = (id, api) => {
    let list = createElement('ul', `roof-list-${id}`);
    addClass(list, 'd-flex');
    addClass(list, 'flex-wrap');
    addClass(list, 'color-list');
    addClass(list, 'p-0');
    id == 'ttop' ? addClass(list, 'd-none') : '';

    switch(id) {
        case 'ttop':
            composeTTOPList(list, api);
            break;
        case 'hht':
            composeHHTList(list, api);
            break;
    }

    return list;
};

export {
    createRoofColorList,
};
