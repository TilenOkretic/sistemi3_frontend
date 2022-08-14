import { getCockpitLayout } from '../../../config/getters/cockpitLayout';

export let getRegexForConsoleSteeringWheelRubber = (api) => `console.${getCockpitLayout(api)}.steeringWheel.rubber`;
