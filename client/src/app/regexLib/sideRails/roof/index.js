import { getSideRailType } from '../../../config/getters/sideRails';

export let getRegexForRoofSideRails = (api) => `sideRails.roof.${getSideRailType(api)}`;
