import { getRoofType } from '../../../../../config/getters/roofSelection';
import { getRegexForBiminiSmall, getRegexForBiminiSpyhood } from '../../../../../regexLib/roofSolutions';

export let biminiShowList = (api) => {
    if (getRoofType(api) == 'bimini-small') {
        return getRegexForBiminiSmall(api);
    } else if (getRoofType(api) == 'bimini-standard') {
        return getRegexForBiminiSpyhood();
    }
    return [];
};
