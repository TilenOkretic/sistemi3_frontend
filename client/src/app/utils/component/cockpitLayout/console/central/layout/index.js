import { getIsCockpitLayoutCentral } from '../../../../../../config/getters/cockpitLayout';
import { getSteeringWheelType } from '../../../../../../config/getters/extraEquipment';
import { setConsoleCentralLayoutConfigs } from '../../../../../../config/setters/cockpitLayout/console/central';
import { getRegexForConsoleLayout, getRegexForOppConsoleLayout } from '../../../../../../regexLib/cockpitLayout/console';
import { getRegexForGalleyKitchenStarboard21 } from '../../../../../../regexLib/extraEquipment/galleyKitchen';
import { getRegexForRearBench } from '../../../../../../regexLib/extraEquipment/rearBench';
import { getRegexForRearBenchCushioning } from '../../../../../../regexLib/extraEquipment/rearBench/cushioning';

export let showLayoutConsoleCentral = (api) => {
    setConsoleCentralLayoutConfigs(api);

    let showReg = getRegexForConsoleLayout(api);
    let showCentral = [ getRegexForRearBench() ];
    
    showReg = [ ...showReg, ...showCentral ];

    let hideReg = [
        `console.side.steeringWheel.${getSteeringWheelType(api)}`,
        ...getRegexForOppConsoleLayout(api),
        ...getRegexForRearBenchCushioning(api), 
        getRegexForGalleyKitchenStarboard21(),
    ];

    let oppType = getIsCockpitLayoutCentral(api) ? 'side' : 'central';
    hideReg = [
        ...hideReg,
        ...oppType == 'side' ? [ 'cushioning.driverSeat.piping' ] : [] ];

    return [ showReg, hideReg ];
};
