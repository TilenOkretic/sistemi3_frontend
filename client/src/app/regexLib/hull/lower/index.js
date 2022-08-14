import { getHullColor } from '../../../config/getters/colorSelection';

let getRegexForHullLower = () => 'hull.lower';

let getRegexForHullLowerColors = (api) => `${getRegexForHullLower()}.${getHullColor(api)}`;

export {
    getRegexForHullLower,
    getRegexForHullLowerColors,
};
