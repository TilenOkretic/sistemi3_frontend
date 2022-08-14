import { errorLog } from '../../../sketchfab_webpack_engine/logger';
import { mergeArrays } from '../../../sketchfab_webpack_engine/utils/arrays';
import { getCockpitLayout } from '../../config/getters/cockpitLayout';
import { getHasRearBench } from '../../config/getters/extraEquipment';
import { getInnerCushioning, getOuterCushioning } from '../../config/getters/upholstery';
import { getRegexForRearBenchLoungeLayout } from '../extraEquipment/rearBench';


// TODO: redo this regex for port and starboard sides of the benches
// DEPRICATED
let getRegexForStandardCushioningUpdate = (type, api) => [ 
    `cushioning.benches.${type}.port.${cushioningFromType(type, api)}`,
    `cushioning.benches.${type}.starboard.${cushioningFromType(type, api)}`,
    `cushioning.sunbed.${type}.${cushioningFromType(type, api)}`,
    `cushioning.sunbed.${type}.${cushioningFromType(type, api)}`,
    `cushioning.coDriverSeat.${type}.${cushioningFromType(type, api)}`,
    `cushioning.driverSeat.${type}.${cushioningFromType(type, api)}`,
    getHasRearBench(api) ? `cushioning.rearBench.${type}.${cushioningFromType(type, api)}` : '' 
];

// DEPRICATED
let getRegexForPassengerCushioningUpdate = (type, api) => [
    `cushioning.busLayout.deck.${type}.${cushioningFromType(type, api)}`,
    `cushioning.sunbed.${type}.${cushioningFromType(type, api)}`,
    `cushioning.driverSeat.${type}.${cushioningFromType(type, api)}`,
    `cushioning.busLayout.coDriver.${type}.${cushioningFromType(type, api)}`
];

// DEPRICATED
let getRegexForLoungeLayoutCushioningUpdate = (type, api) => [
    `cushioning.benches.${type}.port.${cushioningFromType(type, api)}`,
    `cushioning.benches.${type}.starboard.${cushioningFromType(type, api)}`,
    `cushioning.sunbed.${type}.${cushioningFromType(type, api)}`,
    `cushioning.sunbed.${type}.${cushioningFromType(type, api)}`,
    `cushioning.coDriverSeat.${type}.${cushioningFromType(type, api)}`,
    `cushioning.driverSeat.${type}.${cushioningFromType(type, api)}`,
    getHasRearBench(api) ? `cushioning.rearBench.${type}.${cushioningFromType(type, api)}` : '' 
    
];

// DEPRICATED
let getRegexForCentralCushioningUpdate = (type, api) => [
    `cushioning.benches.${type}.${cushioningFromType(type, api)}`,
    getHasRearBench(api) ? `cushioning.rearBench.${type}.${cushioningFromType(type, api)}` : ''
];

// DEPRICATED
let getRegexForSideCushioningUpdate = (type, api) => [
    `cushioning.benches.${type}.${cushioningFromType(type, api)}`,
    getCockpitLayout(api) != 'central' ? `cushioning.driverSeat.${type}.${cushioningFromType(type, api)}` : ''
];

let cushioningFromType = (type, api) => `${type == 'inner' ? getInnerCushioning(api) : getOuterCushioning(api)}`;

// DEPRICATED
// let getRegexForCushioningUpdate = (api, type) => {
//     !type ? type = getCockpitLayout(api) : '';
//     let i = [];
//     let o = [];
//     switch (type) {
//         case 'standard':
//             i = getRegexForStandardCushioningUpdate('inner', api);
//             o = getRegexForStandardCushioningUpdate('outer', api);
//             i.push.apply(i, o);
//             return i;
//         case 'passenger':
//             i = getRegexForPassengerCushioningUpdate('inner', api);
//             o = getRegexForPassengerCushioningUpdate('outer', api);
//             i.push.apply(i, o);
//             return i;
//         case 'lounge':
//             i = getRegexForLoungeLayoutCushioningUpdate('inner', api);
//             o = getRegexForLoungeLayoutCushioningUpdate('outer', api);
//             i.push.apply(i, o);
//             return i;
//         case 'central':
//             i = getRegexForCentralCushioningUpdate('inner', api);
//             o = getRegexForCentralCushioningUpdate('outer', api);
//             i.push.apply(i, o);
//             return i;
//         case 'side':
//             i = getRegexForSideCushioningUpdate('inner', api);
//             o = getRegexForSideCushioningUpdate('outer', api);
//             i.push.apply(i, o);
//             return i;
//     }
// };

let getRegexForBenchesCushinongPortType = (type) => `cushioning.benches.${type}.port`;
let getRegexForBenchesCushinongStarboardType = (type) => `cushioning.benches.${type}.starboard`;

let getRegexForLoungeCushinongPortType = (type) =>`cushioning.loungeLayout.port.${type}`;
let getRegexForLoungeCushinongStarboardType = (type) => `cushioning.loungeLayout.starboard.${type}`;

let getRegexForCushioning = (type, api) => {
    switch (type) {
        case 'standard':
            {
                let rearBenchCush = getHasRearBench(api) ? [ `cushioning.rearBench.outer.${getOuterCushioning(api)}`, `cushioning.rearBench.inner.${getInnerCushioning(api)}` ] : [];
                let o = [ 
                    `${getRegexForBenchesCushinongPortType('outer')}.${getOuterCushioning(api)}`,
                    `${getRegexForBenchesCushinongStarboardType('outer')}.${getOuterCushioning(api)}`,
                    `${getRegexForBenchesCushinongPortType('inner')}.${getInnerCushioning(api)}`,
                    `${getRegexForBenchesCushinongStarboardType('inner')}.${getInnerCushioning(api)}`,
                    `cushioning.sunbed.outer.${getOuterCushioning(api)}`,
                    `cushioning.sunbed.outer.${getOuterCushioning(api)}`,
                    `cushioning.sunbed.inner.${getInnerCushioning(api)}`,
                    `cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`,
                    `cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`,
                    `cushioning.driverSeat.inner.${getInnerCushioning(api)}`,
                    `cushioning.driverSeat.outer.${getOuterCushioning(api)}`
                ];
                mergeArrays(o, rearBenchCush);
                return o;
            }
        case 'passenger':
            return [
                `cushioning.sunbed.outer.${getOuterCushioning(api)}`,
                `cushioning.sunbed.inner.${getInnerCushioning(api)}`,
                `cushioning.busLayout.coDriver.inner.${getInnerCushioning(api)}`,
                `cushioning.busLayout.coDriver.outer.${getOuterCushioning(api)}`,
                `cushioning.busLayout.deck.outer.${getOuterCushioning(api)}`,
                `cushioning.busLayout.deck.inner.${getInnerCushioning(api)}`,
                `cushioning.driverSeat.inner.${getInnerCushioning(api)}`,
                `cushioning.driverSeat.outer.${getOuterCushioning(api)}`
            ];
        case 'central':
            // TODO: inner and outer colors are flipped on the model
            let oc = getRegexForCentralCushioningUpdate('outer', api);
            let ic = getRegexForCentralCushioningUpdate('inner', api); 
            return [ 
                ...ic,
                ...oc,
            ];
        case 'side': 
            return [
                ...getRegexForSideCushioningUpdate('inner', api),
                ...getRegexForSideCushioningUpdate('outer', api),
            ];
        case 'lounge':
            {
                let o = [ 
                    `${getRegexForLoungeCushinongPortType('inner')}.${getInnerCushioning(api)}`,    
                    `${getRegexForLoungeCushinongPortType('outer')}.${getOuterCushioning(api)}`,
                    `${getRegexForLoungeCushinongStarboardType('inner')}.${getInnerCushioning(api)}`,    
                    `${getRegexForLoungeCushinongStarboardType('outer')}.${getOuterCushioning(api)}`,
                    getRegexForRearBenchLoungeLayout(),
                    // TODO: store all of this regexes somwhere so you do not repeate calling then
                    `cushioning.sunbed.outer.${getOuterCushioning(api)}`,
                    `cushioning.sunbed.outer.${getOuterCushioning(api)}`,
                    `cushioning.sunbed.inner.${getInnerCushioning(api)}`,
                    `cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`,
                    `cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`,
                    `cushioning.driverSeat.inner.${getInnerCushioning(api)}`,
                    `cushioning.driverSeat.outer.${getOuterCushioning(api)}`
                ];
                return o;
            }
        default:
            errorLog(`${type} layout is not a valid layout`);
            break; 
    }
};

export {
    getRegexForLoungeCushinongPortType,
    getRegexForLoungeCushinongStarboardType,
    getRegexForBenchesCushinongPortType,
    getRegexForBenchesCushinongStarboardType,
    
    // getRegexForStandardCushioningUpdate,
    // getRegexForCentralCushioningUpdate,
    // getRegexForSideCushioningUpdate,
    // getRegexForPassengerCushioningUpdate,
    // getRegexForLoungeLayoutCushioningUpdate,

    cushioningFromType,
    getRegexForCushioning
};
