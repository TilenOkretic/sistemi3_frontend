import { getSideRailType } from '../../../config/getters/sideRails';

export let getRegexForRearPlatformSideRail = (api) => `rearPlatform.sideRail.${getSideRailType(api)}`;
