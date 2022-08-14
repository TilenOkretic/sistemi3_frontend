import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setCockpitLayout = (layout, api) => {
    setConfigKeyValuePair('cockpitLayout', layout, api);
};

export {
    setCockpitLayout,
};
