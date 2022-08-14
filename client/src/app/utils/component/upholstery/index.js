import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { loadInnerUpholstery } from './innerUpholstery';
import { loadOuterUpholstery } from './outerUpholstery';
import { loadUpholsteryPiping } from './piping';

let upholsteryFunctionMap = {
    'outer-btn': () => loadOuterUpholstery(),
    'inner-btn': () => loadInnerUpholstery(),
    'piping-btn': (api) => loadUpholsteryPiping(api),
};

let upholsteryImageMap = {
    'piping-btn': 'piping',
};

export let createTapestryButton = async (api, id) => {

    let b = createHTMLButton(`upholstery-${id}`, upholsteryImageMap[id], api);
    b.addEventListener('click', () => upholsteryFunctionMap[id](api));

    return b;
};
