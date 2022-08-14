import { createHTMLList } from '../../../../../sketchfab_webpack_engine/utils/listUtil';
import { getRegexForBenchesCushinongPortType } from '../../../../regexLib/upholstery';
import { createUpholsteryListItem } from '../../../list/item/upholstery';

let composeInnerTapestryList = async (parent, api) => {
    let tapestry;
    
    for(let key in api.componentDictionary) {
        /*  Here we look only for PORT inner benches cushioning because if we also look for STARBOARD it would create duplicate LIST ITEMS */
        if(!api.isModel21()) {
            if(key.includes(getRegexForBenchesCushinongPortType('inner'))) {
                let splitkey = key.split('.'); 
                tapestry = splitkey[splitkey.length - 1];
                parent.appendChild(await createUpholsteryListItem('inner', tapestry, api));
            }
        } else {
            if(key.includes(`cushioning.benches.inner`)) {
                let splitkey = key.split('.'); 
                tapestry = splitkey[splitkey.length - 1];
                parent.appendChild(await createUpholsteryListItem('inner', tapestry, api));
            }
        }
        // TODO: handle cushinong loading for models that are NOT 23
    }
};

let composeOuterTapestryList = async (parent, api) => {
    let tapestry;
    
    for(let key in api.componentDictionary) {
        /*  Here we look only for PORT outer benches cushioning because if we also look for STARBOARD it would create duplicate LIST ITEMS */
        if(!api.isModel21()) {
            if (key.includes(getRegexForBenchesCushinongPortType('outer'))) {
                let splitkey = key.split('.'); 
                tapestry = splitkey[splitkey.length - 1];
                parent.appendChild(await createUpholsteryListItem('outer', tapestry, api));
            }
        } else {
            if (key.includes('cushioning.benches.outer')) {
                let splitkey = key.split('.'); 
                tapestry = splitkey[splitkey.length - 1];
                parent.appendChild(await createUpholsteryListItem('outer', tapestry, api));
            }
        }
        // TODO: handle cushinong loading for models that are NOT 23
    }
};

export let createTapestryList = async (id, api) => {
    let list = createHTMLList(`upholstery-tapestry-list-${id}`);
    switch(id) {
        case 'inner':
            await composeInnerTapestryList(list, api);
            break;
        case 'outer': 
            await composeOuterTapestryList(list, api);
            break;
    }
    return list;
};
