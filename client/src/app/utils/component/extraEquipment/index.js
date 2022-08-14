import { addBowCushioning } from './bowCushioning';
import { addFrontguardRail } from './frontguardRail';
import { addMiniCupHolder } from './miniCupHolder';
import { addWindshield } from './windshield';
import { addAdditionalStorage } from './additionalStorage';
import { addMarineCarpet } from './marineCarpet';
import { addSunbedTent } from './sunbedTent';
import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { getHasRoof } from '../../../config/getters/roofSelection';

let extrasImageMap = {
    // DEPRICATED: moved to table configuration
    // 'dkt': 'dkt-btn',

    'bsc': 'bsc-btn',
    'shpc': 'shpc-btn',
    'shpb': 'shpb-btn',
    'fgr': 'fgr-btn',
    'mch': 'mch-btn',
    'wds': 'wds-btn',
    'ads': 'ads-btn',
    'mac': 'mac-btn',
    'snbd-tent': 'snbd-tent', 
};

let extrasConditionMap = {
    // DEPRICATED: moved to table configuration
    // 'dkt': (api) => !getIsCockpitLayoutPassenger(api),
    
    'bsc': (api) => !api.isModel21(),
    'fgr': (api) => !api.isModel21(),
    'mch': (api) => api.isModelCabin(),
    'wds': (api) => api.isModel21(),
    'ads': (api) => api.isModel21(),
    'mac': (api) => api.isModel21(),
    'snbd-tent': (api) => getHasRoof(api) && !api.isModel21(),
};

let extrasFunctionsMap = {
    // DEPRICATED: moved to table configuration
    // 'dkt': async (api) => await addTeakTable(api),

    'bsc': async (api) => await addBowCushioning(api),
    'fgr': async (api) => await addFrontguardRail(api),
    'mch': async (api) => await addMiniCupHolder(api),
    'wds': async (api) => await addWindshield(api),
    'ads': async (api) => await addAdditionalStorage(api),
    'mac': async (api) => await addMarineCarpet(api),
    'snbd-tent': (api) => addSunbedTent(api),
};

export let addCockpitExtra = (id, api) => {
    if (!extrasConditionMap[id](api)) return null;

    let BTN = createHTMLButton(`extra-${id}-btn`, extrasImageMap[id], api);
    BTN.addEventListener('click', async () => await extrasFunctionsMap[id](api));

    return BTN;
};
