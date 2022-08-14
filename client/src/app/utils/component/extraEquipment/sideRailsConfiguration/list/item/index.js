import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { setImageOfHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons/setters';
import { addFenderProfiles } from '../../fenderProfiles';
import { addStainlessSteelProfiles } from '../../stainlessSteelProfiles';

let sideRialsFuntionMap = {
    'chrome': (api) => addStainlessSteelProfiles(api),
    'black': (api) => addFenderProfiles(api), 
};

export let createSideRailListItem = (id, api) => {
    let btn = createHTMLButton(`extra-siderail-${id}`, `extra-siderail-${id}`, api);
    btn.addEventListener('click', () => {
        sideRialsFuntionMap[id](api);
        setImageOfHTMLButton('extra-siderails-img', `extra-siderail-${id}`, api);
    });
    return btn;
};
