import { getDeckColor } from '../../../config/getters/colorSelection';

let getRegexForHullUpper = () => 'hull.upper';
let getRegexForHullUpperColors = (api) => `${getRegexForHullUpper()}.${getDeckColor(api)}`;

export {
    getRegexForHullUpper,
    getRegexForHullUpperColors,
};
