import { setDeckColor, setHullColor } from '../../../config/setters/colorSelection';
import { setHasDeckTable, setHasRearBench } from '../../../config/setters/extraEquipment';
import { setElectricOutboardEngineCount, setHasMotorPropulsion, setHullType } from '../../../config/setters/hullAndMotorization';
import { setRoofColor, setRoofType } from '../../../config/setters/roofSelection';
import { setSideRailType } from '../../../config/setters/sideRails';
import { setHasPiping, setOuterCushioning } from '../../../config/setters/upholstery';

export default (api) => {
    setDeckColor('darkAntracite', api);
    setHullColor('white', api);
    setRoofColor('darkAntracite', api);
    setRoofType('hht', api);
    setSideRailType('chrome', api);
    setHullType('motor', api);
    setHasMotorPropulsion(false, api);
    setElectricOutboardEngineCount(null, api);
    setOuterCushioning('mercury', api);
    setHasRearBench(true, api);
    setHasDeckTable(true, api);
    setHasPiping(true, api);
};
