import { getCockpitLayout } from '../../config/getters/cockpitLayout';
import { getSteeringWheelType } from '../../config/getters/extraEquipment';

export let getRegexForConsoleSteeringWheel = (api) => `console.${getCockpitLayout(api)}.steeringWheel.${getSteeringWheelType(api)}`;
