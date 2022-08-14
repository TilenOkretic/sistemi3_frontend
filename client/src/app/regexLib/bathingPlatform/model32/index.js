import { getRegexForRearPlatformOutboardEngineSideRail } from '../../sideRails/outboardEngine';
import { getRegexForRearPlatformOutboardEngineColor } from './color';

export let getRegexForRearPlatformOutboardEngine = (api) => [ getRegexForRearPlatformOutboardEngineColor(api), getRegexForRearPlatformOutboardEngineSideRail(api) ];
