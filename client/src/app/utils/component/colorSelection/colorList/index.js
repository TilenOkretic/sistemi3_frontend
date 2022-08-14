import { createHTMLList } from '../../../../../sketchfab_webpack_engine/utils/listUtil';
import { createHullColorListItem } from '../../../list/item/color';

let composeColorList = (id, parent, api) => {
    let sid = id == 'full' ? 'upper' : id;
    
    for(let key in api.componentDictionary) {   
        let color = key.split('.')[2];
        if(key.includes(`hull.${sid}`)) {
            parent.appendChild(createHullColorListItem(id, color, api));
        } 
    }
};

let composeColorListUpper = (parent, api) => {
    composeColorList('upper', parent, api);
};

let composeColorListLower = (parent, api) => {
    composeColorList('lower', parent, api);
};

let composeColorListFull = (parent, api) => {
    composeColorList('full', parent, api);
};

let composeColorListMap = {
    'upper': (parent, api) => composeColorListUpper(parent, api),
    'lower': (parent, api) => composeColorListLower(parent, api),
    'full': (parent, api) =>  composeColorListFull(parent, api),
};

let getColorListId = (location) => `colorSelection-colorList-${location}`;

let createColorSelectionList = async (id, api) => {
    let list = createHTMLList(`colorSelection-colorList-${id}`);
    await composeColorListMap[id](list, api);
    return list;
};

let createColorListUpper = (api) => createColorSelectionList('upper', api); 

let createColorListLower = (api) => createColorSelectionList('lower', api);

let createColorListFull = (api) => createColorSelectionList('full', api);

export {
    getColorListId,
    createColorListUpper,
    createColorListLower,
    createColorListFull,
};
