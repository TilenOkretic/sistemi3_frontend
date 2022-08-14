import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasBowCushioning, getHasDeckTable, getHasFrontGuardRail, getHasMarineCarpet, getHasMiniCupHolder, getHasWindshield } from '../../../config/getters/extraEquipment';
import { getIsHullElectric, getIsHullMotor } from '../../../config/getters/hullAndMotorization';
import { getHasRoof, getRoofType } from '../../../config/getters/roofSelection';
import { getHasPiping } from '../../../config/getters/upholstery';
import { getRegexForRoofColors } from '../../../regexLib/roofSolutions';
import { getRegexForCushioning } from '../../../regexLib/upholstery';
import { getRegexForBowCushioning } from '../../../regexLib/extraEquipment/bowCushioning';
import { getRegexForDeckTable } from '../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForMarineCarpet } from '../../../regexLib/extraEquipment/marineCarpet';
import { getRegexForMiniCupHolder } from '../../../regexLib/extraEquipment/miniCupHolder';
import { getRegexForWindshield } from '../../../regexLib/extraEquipment/windshield';
import { getRegexForHullDisplacement } from '../../../regexLib/hull/displacement';
import { getRegexForHullLowerColors } from '../../../regexLib/hull/lower';
import { getRegexForHullPlaning } from '../../../regexLib/hull/planing';
import { getRegexForHullUpperColors } from '../../../regexLib/hull/upper';
import { getRegexForHullLogosForModel, getRegexForRoofLogosForModel } from '../../../regexLib/logos';
import { getRegexForFrontGuardRail } from '../../../regexLib/sideRails/frontguardRail';
import { getRegexForSideRails } from '../../../regexLib/sideRails';
import { getRegexForConsoleSteeringWheel } from '../../../regexLib/steeringWheel';
import { hideAll } from '../../dictionary/boatDictionaryUtil';
import { getRegexForPiping } from '../../../regexLib/piping/cockpitLayout';
import { getRegexForFloorMainBlack } from '../../../regexLib/flooring';
import { outboardMotorShowList } from './motorization/outboardMotor';
import { inboarMotorShowList } from './motorization/inboardMotor';
import { model21ShowList } from './motorization/model21';
import { platformShowList } from './platform';
import { standardLayoutShowList } from './cockpitLayout/standard';
import { consoleLayoutCentralShowList } from './cockpitLayout/consoleSide';
import { consoleLayoutSideShowList } from './cockpitLayout/consoleCentral';
import { biminiShowList } from './roofSolutions/bimini';
import { getCockpitLayout } from '../../../config/getters/cockpitLayout';


export let updateAll = (api) => {

    hideAll(api);

    let showList = [];

    api.isModelCabinEvo() ? showList.push(getRegexForFloorMainBlack()) : '';

    getHasPiping(api) ? showList.push.apply(showList, getRegexForPiping(api)) : '';
    
    showList.push.apply(showList, getRegexForCushioning(getCockpitLayout(api), api));
    
    showList.push(getRegexForHullLowerColors(api));
    showList.push(getRegexForHullUpperColors(api));
    getRegexForRoofColors(api) != '' ? showList.push(getRegexForRoofColors(api)) : '';
    showList.push.apply(showList, getRegexForSideRails(api));

    if (!api.isModel21()) {
        getIsHullElectric(api) ? showList.push(getRegexForHullDisplacement()) : getIsHullMotor(api) ? showList.push(getRegexForHullPlaning()): ''; 
    }

    showList = [ 
        ...showList, 
        ...outboardMotorShowList(api),
        ...inboarMotorShowList(api),
        ...model21ShowList(api),
        ...biminiShowList(api),
        ...platformShowList(api),
        ...standardLayoutShowList(api),
        ...consoleLayoutCentralShowList(api),
        ...consoleLayoutSideShowList(api) ];

    getHasDeckTable(api) ? showList.push(getRegexForDeckTable()) : '';

    if (api.isModel21()) {
        showList.push(getRegexForConsoleSteeringWheel(api));
    }

    if (getHasBowCushioning(api)) {
        showList.push(getRegexForBowCushioning());
    }

    showList.push(getRegexForHullLogosForModel(api));
    getHasRoof(api) ? getRoofType(api) == 'hht' ? showList.push(getRegexForRoofLogosForModel(api)) : '' : '';

    getHasFrontGuardRail(api) ? showList.push(getRegexForFrontGuardRail()) : '';
    getHasMiniCupHolder(api) ? showList.push(getRegexForMiniCupHolder()) : '';

    if (getHasMarineCarpet(api)) {
        showList.push(getRegexForMarineCarpet());
    }

    getHasWindshield(api) ? showList.push.apply(showList, getRegexForWindshield()) : '';

    showElementList(showList, api);
};
