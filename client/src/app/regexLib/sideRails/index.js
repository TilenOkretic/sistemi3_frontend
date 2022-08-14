import { getHasRoof } from '../../config/getters/roofSelection';
import { getSideRailType } from '../../config/getters/sideRails';

export let getRegexForSideRails = (api, type) => {
    !type ? type = getSideRailType(api) : '';
    // TODO: say to Jernej to rename sideRails. to sideRail. for model 21 and model 28/32
    return [ 
        api.isModel21() ? `sideRails.${type}` : `sideRail.${type}`,
        getHasRoof(api) && api.isModel21() ? `sideRails.roof.${type}` : '' ];
};

