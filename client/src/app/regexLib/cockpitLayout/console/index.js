import { getCockpitLayout, getIsCockpitLayoutCentral } from '../../../config/getters/cockpitLayout';
import { getSteeringWheelType } from '../../../config/getters/extraEquipment';
import { cushioningFromType } from '../../upholstery';

let getRegexForConsoleLayout = (api) => [
    `console.${getCockpitLayout(api)}.steeringWheel.${getSteeringWheelType(api)}`,
    `console.${getCockpitLayout(api)}`
];

let getRegexForOppConsoleLayout = (api) => [
    `console.${getIsCockpitLayoutCentral(api) ? 'side' : 'central'}`,
    getIsCockpitLayoutCentral(api) ? `cushioning.driverSeat.inner.${cushioningFromType('inner', api)}` : '',
    getIsCockpitLayoutCentral(api) ? `cushioning.driverSeat.outer.${cushioningFromType('outer', api)}` : ''
];

let getRegexForConsoleCentral = () => 'console.central';

export {
    getRegexForConsoleLayout,
    getRegexForOppConsoleLayout,
    getRegexForConsoleCentral,
};
