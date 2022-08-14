import { cushioningFromType } from '../../../upholstery';

export let getRegexForRearBenchCushioning = (api) => [
    `cushioning.rearBench.inner.${cushioningFromType('inner', api)}`,
    `cushioning.rearBench.outer.${cushioningFromType('outer', api)}`
];
