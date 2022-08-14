import { getInnerCushioning, getOuterCushioning } from '../../../config/getters/upholstery';
import { getRegexForBenchesStarboardPiping, getRegexForLoungeLayoutStarboardPiping } from '../../piping/cockpitLayout';
import { getRegexForBenchesCushinongStarboardType, getRegexForLoungeCushinongStarboardType } from '../../upholstery';

let getRegexForStarboardBenchBase = () => 'bench.side.base.starboard'; 

let getRegexForStandardLayoutStarboardBench = (api) => [
    `${getRegexForBenchesCushinongStarboardType('inner', api)}.${getInnerCushioning(api)}`,
    `${getRegexForBenchesCushinongStarboardType('outer', api)}.${getOuterCushioning(api)}`,
    getRegexForBenchesStarboardPiping(),  
];

let getRegexForLoungeLayoutStarboardBench = (api) => [
    `${getRegexForLoungeCushinongStarboardType('inner', api)}.${getInnerCushioning(api)}`,
    `${getRegexForLoungeCushinongStarboardType('outer', api)}.${getOuterCushioning(api)}`, 
    getRegexForLoungeLayoutStarboardPiping(),
];

export {
    getRegexForStarboardBenchBase,
    getRegexForStandardLayoutStarboardBench,
    getRegexForLoungeLayoutStarboardBench,
};

