import { getSideRailType } from '../../../config/getters/sideRails';
import { getRegexForRearPlatform21Color } from './color';

export let getRegexForRearPlatform21 = (api) => [ getRegexForRearPlatform21Color(api), `rearPlatform.sideRail.${getSideRailType(api)}` ];
