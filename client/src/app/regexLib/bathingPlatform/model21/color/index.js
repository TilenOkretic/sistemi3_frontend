import { getHullColor } from '../../../../config/getters/colorSelection';

export let getRegexForRearPlatform21Color = (api) => `rearPlatform.colour.${getHullColor(api)}`;
