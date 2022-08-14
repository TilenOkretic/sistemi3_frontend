import { hide } from '../../../sketchfab_webpack_engine/dictionary/model';
import { getHullColor } from '../../config/getters/colorSelection';
import { getInnerCushioning, getOuterCushioning } from '../../config/getters/upholstery';
import { getRegexForLoungeLayoutInsert } from '../../regexLib/cockpitLayout/lounge/insert';
import { getRegexForSunbedTent } from '../../regexLib/extraEquipment/sunbedTent';
import { getRegexForLoungeLayoutPortPiping, getRegexForLoungeLayoutStarboardPiping } from '../../regexLib/piping/cockpitLayout';
import { getRegexForBenchesCushinongPortType, getRegexForBenchesCushinongStarboardType, getRegexForLoungeCushinongPortType, getRegexForLoungeCushinongStarboardType } from '../../regexLib/upholstery';

let hideAll = (api) => hide((key) => key != 'restOfTheBoat', api);

let hideAllCushioning = (api) => hide((key) => key.includes('cushioning.busLayout') || key.includes('cushioning.driver') || key.includes('cushioning.sunbed') || key.includes('cushioning.coDriver') || key.includes('cushioning.benches') || key.includes('cushioning.rearBench') || key.includes('cushioning.inner') || key.includes('cushioning.outer'), api);

let hideCurrentCushioning = (api) => hide((key) => 
    // TODO: getRegexForBusLayoutCushioning
    key.includes('cushioning.busLayout.coDriver.piping') ||
    key.includes(`cushioning.busLayout.coDriver.inner.${getInnerCushioning(api)}`) || 
    key.includes(`cushioning.busLayout.coDriver.outer.${getOuterCushioning(api)}`) ||
    key.includes(`cushioning.busLayout.deck.inner.${getInnerCushioning(api)}`) ||
    key.includes(`cushioning.busLayout.deck.outer.${getOuterCushioning(api)}`) ||
    key.includes('cushioning.busLayout.deck.piping') ||
    
    // TODO: getRegexForDriverSeatCushioning
    key.includes(`cushioning.driverSeat.inner.${getInnerCushioning(api)}`) ||
    key.includes(`cushioning.driverSeat.outer.${getOuterCushioning(api)}`) ||
    key.includes('cushioning.driverSeat.piping') ||
    
    // TODO: getRegexForCoDriverSeatCushioning
    key.includes(`cushioning.coDriverSeat.inner.${getInnerCushioning(api)}`) ||
    key.includes(`cushioning.coDriverSeat.outer.${getOuterCushioning(api)}`) ||
    key.includes('cushioning.coDriverSeat.piping') ||
    
    key.includes(`cushioning.sunbed.inner.${getInnerCushioning(api)}`) ||
    key.includes(`cushioning.sunbed.outer.${getOuterCushioning(api)}`) ||
    
    key.includes(`cushioning.rearBench.inner.${getInnerCushioning(api)}`) ||
    key.includes(`cushioning.rearBench.outer.${getOuterCushioning(api)}`) ||
    key.includes(`${getRegexForBenchesCushinongPortType('outer')}.${getOuterCushioning(api)}`) ||
    key.includes(`${getRegexForBenchesCushinongPortType('inner')}.${getInnerCushioning(api)}`) ||
    key.includes('cushioning.rearBench.piping') ||
    
    key.includes(`${getRegexForBenchesCushinongStarboardType('outer')}.${getOuterCushioning(api)}`) ||
    key.includes(`${getRegexForBenchesCushinongStarboardType('inner')}.${getInnerCushioning(api)}`) ||
    
    key.includes(`${getRegexForLoungeCushinongPortType('outer')}.${getOuterCushioning(api)}`) ||
    key.includes(`${getRegexForLoungeCushinongPortType('inner')}.${getInnerCushioning(api)}`) ||
    
    key.includes(`${getRegexForLoungeCushinongStarboardType('outer')}.${getOuterCushioning(api)}`) ||
    key.includes(`${getRegexForLoungeCushinongStarboardType('inner')}.${getInnerCushioning(api)}`) ||
    
    key.includes(getRegexForLoungeLayoutPortPiping()) ||
    key.includes(getRegexForLoungeLayoutStarboardPiping()) ||
    key.includes('cushioning.benches.port.piping') ||
    key.includes(`cushioning.benches.outer.${getOuterCushioning(api)}`) ||
    key.includes(`cushioning.benches.inner.${getInnerCushioning(api)}`) ||
    key.includes('cushioning.benches.starboard.piping'),
api);

let hideAllBodyColors = (api) => hide((key) => 
    key.includes('hull.lower') ||
    key.includes('hull.upper') ||
    key.includes(`rearPlatform.${getHullColor(api)}`) ||
    key.includes(getRegexForLoungeLayoutInsert(api)) ||
    key.includes(`rearPlatform.outboardEngine.${getHullColor(api)}`),
api);

let hideAllSideRails = (api) => hide((key) => key.includes('sideRail') || key.includes('sideRails'), api);

let hideAllHullAndMotors = (api) => hide((key) => (key.includes('hull') && !key.includes('upper') && !key.includes('lower')) || key.includes('motor') || key.includes('rearPlatform.outboardEngine'), api);

let hideAllRoof = (api) => hide((key) => key.includes('roof') || key.includes('bimini') || key.includes(getRegexForSunbedTent()), api);

export {
    hideAll,
    hideAllCushioning,
    hideCurrentCushioning,
    hideAllBodyColors,
    hideAllSideRails,
    hideAllHullAndMotors,
    hideAllRoof,
};
