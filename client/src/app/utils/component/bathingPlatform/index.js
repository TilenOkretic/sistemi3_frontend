import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../sketchfab_webpack_engine/utils/dom';
import { loadBathingPlatform } from './platform';
import { removePlafrom } from './removePlatform';

let bathingPlatformImageMap = {
    'no-platform': 'noPlatform',
    'pbpfl-platform': 'rearPlatform',
};

let bathingPlatformFunctionsMap = {
    'no-platform': async (api) => await removePlafrom(api),
    'pbpfl-platform': async (api) => await loadBathingPlatform(api),
};

export let createPlatformButton = (api, id) => {

    let btn = createHTMLButton(`bathingPlatform-${id}`, bathingPlatformImageMap[id], api);
    addClass(btn, 'd-flex');
    addClass(btn, 'ai-center');

    btn.addEventListener('click', async () => await bathingPlatformFunctionsMap[id](api));

    return btn;
};
