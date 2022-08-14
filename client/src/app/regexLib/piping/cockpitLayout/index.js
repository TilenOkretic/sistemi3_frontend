import { getCockpitLayout } from '../../../config/getters/cockpitLayout';
import { getHasRearBench } from '../../../config/getters/extraEquipment';

let getRegexForRearBenchPiping = () => 'cushioning.rearBench.piping';
let getRegexForDirverSeatPiping = () => 'cushioning.driverSeat.piping';
let getRegexForCoDirverSeatPiping = () => 'cushioning.coDriverSeat.piping';

let getRegexForBenchesPortPiping = () => 'cushioning.benches.port.piping';
let getRegexForBenchesStarboardPiping = () => 'cushioning.benches.starboard.piping';
let getRegexForLoungeLayoutPortPiping = () => 'cushioning.loungeLayout.port.piping';
let getRegexForLoungeLayoutStarboardPiping = () => 'cushioning.loungeLayout.starboard.piping';

let getRegexForPiping = (api, type) => {
    !type ? type = getCockpitLayout(api) : '';
    switch (type) {
        case 'standard':
            return [
                getRegexForBenchesPortPiping(), 
                getRegexForBenchesStarboardPiping(),
                getRegexForRearBenchPiping(),
                getRegexForCoDirverSeatPiping(),
                getRegexForDirverSeatPiping(), 
            ];
        case 'passenger':
            return [
                'cushioning.busLayout.deck.piping',
                'cushioning.busLayout.coDriver.piping',
                'cushioning.driverSeat.piping'
            ];
        case 'lounge':
            return [
                getRegexForLoungeLayoutPortPiping(),
                getRegexForLoungeLayoutStarboardPiping(),
                getRegexForCoDirverSeatPiping(),
                // TODO: finish this piping
            ];
        case 'central':
            return [
                'cushioning.benches.piping.001',
                getHasRearBench(api) ? 'cushioning.rearBench.piping.001' : ''
            ];
        case 'side':
            return [
                'cushioning.benches.piping.001'
            ];
        
    }
};

export {
    getRegexForRearBenchPiping,
    getRegexForDirverSeatPiping,
    getRegexForCoDirverSeatPiping,
    getRegexForBenchesPortPiping,
    getRegexForBenchesStarboardPiping,
    getRegexForLoungeLayoutPortPiping,
    getRegexForLoungeLayoutStarboardPiping,
    getRegexForPiping,
};
