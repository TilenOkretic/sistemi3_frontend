import { getIsCockpitLayoutLounge, getIsCockpitLayoutStandard } from '../../../config/getters/cockpitLayout';

export let getRegexForCoDriverSeatPiping = (api) => getIsCockpitLayoutStandard(api) || getIsCockpitLayoutLounge(api) ? 'cushioning.coDriverSeat.piping' : 'cushioning.busLayout.coDriver.piping';
