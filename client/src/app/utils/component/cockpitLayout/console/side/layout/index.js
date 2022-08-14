import { getIsCockpitLayoutCentral } from '../../../../../../config/getters/cockpitLayout';
import { getSteeringWheelType } from '../../../../../../config/getters/extraEquipment';
import { setConsoleSideLayoutConfigs } from '../../../../../../config/setters/cockpitLayout/console/side';
import { getRegexForConsoleLayout, getRegexForOppConsoleLayout } from '../../../../../../regexLib/cockpitLayout/console';
import { getRegexForGalleyKitchenStarboard21 } from '../../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForRearBenchCushioning } from '../../../../../../regexLib/extraEquipment/rearBench/cushioning';

export let getLayoutConsoleSide = (api) => {
    setConsoleSideLayoutConfigs(api);

    let showReg = getRegexForConsoleLayout(api);

    let hideSideBench = [ getRegexForRearBench(), getRegexForGalleyKitchenStarboard21() ];
    let hideReg = [
        `console.${getIsCockpitLayoutCentral(api) ? 'side' : 'central'}.steeringWheel.${getSteeringWheelType(api)}`,
        ...hideSideBench,
        ...getRegexForOppConsoleLayout(api),
        ...getRegexForRearBenchCushioning(api)
    ];

    let oppType = getIsCockpitLayoutCentral(api) ? 'side' : 'central';
    hideReg = [
        ...hideReg,
        ...oppType == 'side' ? [ 'cushioning.driverSeat.piping' ] : []
    ];

    return [ showReg, hideReg ];
};
