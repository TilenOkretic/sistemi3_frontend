import { getSideRailType } from '../../../config/getters/sideRails';

let getRegexForRearPlatformOutboardEngineSideRail = (api) => `rearPlatform.outboardEngine.sideRail.${getSideRailType(api)}`;

let getRegexForRearPlatformOutboardEngineSideRail21 = (api) => `rearPlatform.sideRail.${getSideRailType(api)}`;

export {
    getRegexForRearPlatformOutboardEngineSideRail,
    getRegexForRearPlatformOutboardEngineSideRail21,
};
