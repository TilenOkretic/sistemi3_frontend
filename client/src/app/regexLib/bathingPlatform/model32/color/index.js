import { getHullColor } from '../../../../config/getters/colorSelection';

export let getRegexForRearPlatformOutboardEngineColor = (api) => `rearPlatform.outboardEngine.${getHullColor(api)}`;
