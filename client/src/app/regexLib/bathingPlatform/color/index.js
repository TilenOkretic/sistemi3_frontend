import { getHullColor } from '../../../config/getters/colorSelection';

export let getRegexForRearPlatformColor = (api) => `rearPlatform.${getHullColor(api)}`;
