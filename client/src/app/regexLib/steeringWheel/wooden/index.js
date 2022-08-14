import { getCockpitLayout } from '../../../config/getters/cockpitLayout';

export let getRegexForConsoleSteeringWheelWooden = (api) => `console.${getCockpitLayout(api)}.steeringWheel.wooden`;
