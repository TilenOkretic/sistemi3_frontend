import { getThrottleCount } from '../../../config/getters/hullAndMotorization';

export let getRegexForThrottleUpdate = (api) => `throttle.${getThrottleCount(api)}`;
