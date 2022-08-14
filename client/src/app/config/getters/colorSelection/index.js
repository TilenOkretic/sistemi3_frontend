import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getDeckColor = (api) => getConfigFromKey('deckColor', api);

let getHullColor = (api) => getConfigFromKey('hullColor', api);

export {
    getDeckColor,
    getHullColor,
};
