import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { addClass } from '../../../../sketchfab_webpack_engine/utils/dom';
import { loadCentralConsoleLayout } from './console/central';
import { loadSideConsoleLayout } from './console/side';
import { loadLoungeLayout } from './lounge';
import { loadPassengerLayout } from './passenger';
import { loadStandardLayout } from './standard';

let layoutImg = {
    'standard': 'standardLayout',
    'passenger': 'busLayout',
    // TODO: image
    'lounge': 'loungeLayout',
    'central': 'consoleCenterLayout',
    'side': 'consoleSideLayout',
};

let layoutFunction = {
    'standard': (api) => loadStandardLayout(api),
    'passenger': (api) => loadPassengerLayout(api),
    'lounge': (api) => loadLoungeLayout(api),
    'central': (api) => loadCentralConsoleLayout(api),
    'side': (api) => loadSideConsoleLayout(api),
};

let layoutId = {
    'standard': 'cockpit-layout-standard',
    'passenger': 'cockpit-layout-passenger',
    'lounge': 'cockpit-layout-lounge',
    'central': 'console-layout-central',
    'side': 'console-layout-side',
};

export let createLayoutButton = (id, api) => {
    let lb = createHTMLButton(layoutId[id], `${layoutImg[id]}`, api);
    addClass(lb, 'w-17r');
    lb.addEventListener('click', () => layoutFunction[id](api));
    
    return lb;
};
