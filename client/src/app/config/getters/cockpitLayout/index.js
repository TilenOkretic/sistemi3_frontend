import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getCockpitLayout = (api) => getConfigFromKey('cockpitLayout', api);

let getIsCockpitLayoutStandard = (api) => getCockpitLayout(api) === 'standard';

let getIsCockpitLayoutPassenger = (api) => getCockpitLayout(api) === 'passenger';

let getIsCockpitLayoutLounge = (api) => getCockpitLayout(api) === 'lounge';

let getIsCockpitLayoutSide = (api) => getCockpitLayout(api) === 'side';

let getIsCockpitLayoutCentral = (api) => getCockpitLayout(api) === 'central';

export {
    getCockpitLayout,
    getIsCockpitLayoutStandard,
    getIsCockpitLayoutPassenger,
    getIsCockpitLayoutLounge,
    getIsCockpitLayoutSide,
    getIsCockpitLayoutCentral,
};
