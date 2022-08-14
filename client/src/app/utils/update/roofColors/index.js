import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getRoofType } from '../../../config/getters/roofSelection';
import { getRegexForRoofColors } from '../../../regexLib/roofSolutions';
import { getRegexForRoofLogosForModel } from '../../../regexLib/logos';
import { getRegexForRoofSideRails } from '../../../regexLib/sideRails/roof';
import { hideAllRoof, } from '../../dictionary/boatDictionaryUtil';

export let updateRoofColors = (api) => {
    let show = [ getRegexForRoofColors(api), api.isModel21() ? getRegexForRoofSideRails(api) : '' ];
    getRoofType(api) == 'ttop' ? '' : getRoofType(api) == 'hht' ? show.push(getRegexForRoofLogosForModel(api)) : '';

    hideAllRoof(api);
    showElementList(show, api);
};
