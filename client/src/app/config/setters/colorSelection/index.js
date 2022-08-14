import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';
import { getDeckColor, getHullColor } from '../../getters/colorSelection';

let setDeckColor = (color, api) => {
    setConfigKeyValuePair('deckColor', color, api);
};

let setHullColor = (color, api) => {
    setConfigKeyValuePair('hullColor', color, api);
};

let setDeckHullColorBasedOnType = (type, color, api) => {
    let typeMap = {
        'lower': () => {
            setHullColor(color, api);
            if(getDeckColor(api) != color && getDeckColor(api) != 'white' && color != 'white' ) {
                setDeckColor('white', api);
            }
        },
        'upper': () => {
            setDeckColor(color, api);
            if (getHullColor(api) != color && getHullColor(api) != 'white' && color != 'white') {
                setHullColor('white', api);
            }
        },
    };
    typeMap[type]();
};

let setHullDeckColor = (color, api) => {
    setHullColor(color, api);
    setDeckColor(color, api);
};

export {
    setDeckColor,
    setHullColor,
    setDeckHullColorBasedOnType,
    setHullDeckColor,
};
