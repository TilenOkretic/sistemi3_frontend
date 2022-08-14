import { hideElementList, showElementList } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { mergeArrays } from '../../../../../sketchfab_webpack_engine/utils/arrays';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { getIsCockpitLayoutCentral } from '../../../../config/getters/cockpitLayout';
import { getHasPiping } from '../../../../config/getters/upholstery';
import { setHasPiping } from '../../../../config/setters/upholstery';
import { getRegexForPiping } from '../../../../regexLib/piping/cockpitLayout';
import { getRegexForCoDriverSeatPiping } from '../../../../regexLib/piping/codriverSeat';
import { getRegexForDriverSeatPiping } from '../../../../regexLib/piping/driverSeat';
import { getRegexForSunbedPiping } from '../../../../regexLib/piping/sunbed';


/**
 * Genertal functiom for showing/hidding piping
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @param {boolean} flag - weather to show piping or not 
 */
let piping = (flag, api) => {
    let modeReg = getRegexForPiping(api);
    let nonCentral = !getIsCockpitLayoutCentral(api) ? [ getRegexForDriverSeatPiping() ] : [];
    let showReg = [ !api.isModel21() ? getRegexForCoDriverSeatPiping(api) : '', !api.isModel21() ? getRegexForSunbedPiping() : '' ];

    mergeArrays(showReg, nonCentral);
    mergeArrays(showReg, modeReg);

    flag ? showElementList(showReg, api) : hideElementList(showReg, api);
};


let loadUpholsteryPiping = (api) => {
    setHasPiping(!getHasPiping(api), api);
    piping(getHasPiping(api), api);
    getHasPiping(api) ? showSelection('upholstery-piping-btn') : clearSelection('upholstery-piping-btn') ;
};

export {
    piping,
    loadUpholsteryPiping
};
