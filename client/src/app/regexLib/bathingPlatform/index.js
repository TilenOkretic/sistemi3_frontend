import { getSideRailType } from '../../config/getters/sideRails';
import { getRegexForRearPlatformColor } from './color';

export let getRegexForRearPlatform = (api) => [ getRegexForRearPlatformColor(api), `rearPlatform.sideRail.${getSideRailType(api)}` ];
