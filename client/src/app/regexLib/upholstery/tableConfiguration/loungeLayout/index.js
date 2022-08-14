import { getInnerCushioning, getOuterCushioning } from '../../../../config/getters/upholstery';

export let getRegexForTableCushioning = (type, api) => `tableCushion.loungeLayout.${type}.${type === 'outer' ? getOuterCushioning(api) : getInnerCushioning(api)}`;
