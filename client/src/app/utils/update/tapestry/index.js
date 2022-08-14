import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasPiping } from '../../../config/getters/upholstery';
import { getRegexForCushioning } from '../../../regexLib/upholstery';
import { hideCurrentCushioning, } from '../../dictionary/boatDictionaryUtil';
import { getRegexForPiping } from '../../../regexLib/piping/cockpitLayout';
import { getCockpitLayout } from '../../../config/getters/cockpitLayout';

export let updateCushioning = (api) => {
    let showReg = getRegexForCushioning(getCockpitLayout(api), api);

    showReg = [ ...showReg, ...getHasPiping(api) ? getRegexForPiping(api) : [] ];

    hideCurrentCushioning(api);
    showElementList(showReg, api);
};
