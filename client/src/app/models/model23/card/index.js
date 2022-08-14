import Card from '../../../../sketchfab_webpack_engine/card';
import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import standardDefaultConfiguration from '../../../config/getters/standardDefaultConfiguration';
import { getHasPiping } from '../../../config/getters/upholstery';
import { setPlatformVisible } from '../../../config/setters/bathingPlatform';
import { setBoatModel } from '../../../config/setters/boatModel';
import { setCockpitLayout } from '../../../config/setters/cockpitLayout';
import { setHasFrontGuardRail } from '../../../config/setters/extraEquipment';
import { setHasStarboardBench } from '../../../config/setters/extraEquipment/starboardBench';
import { setHasInboardMotor, setInboardMotorCount, setMotorization, setThrottleCount } from '../../../config/setters/hullAndMotorization';
import { setInnerCushioning } from '../../../config/setters/upholstery';
import { getRegexForDeckTable } from '../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForFloorMainBlack } from '../../../regexLib/flooring';
import { getRegexForHullLowerColors } from '../../../regexLib/hull/lower';
import { getRegexForHullPlaning } from '../../../regexLib/hull/planing';
import { getRegexForHullUpperColors } from '../../../regexLib/hull/upper';
import { getRegexForHullLogosForModel, getRegexForRoofLogosForModel } from '../../../regexLib/logos';
import { getRegexForPiping } from '../../../regexLib/piping/cockpitLayout';
import { getRegexForRoofColors } from '../../../regexLib/roofSolutions';
import { getRegexForSideRails } from '../../../regexLib/sideRails';
import { getRegexForFrontGuardRail } from '../../../regexLib/sideRails/frontguardRail';
import { hideAll } from '../../../utils/dictionary/boatDictionaryUtil';
import { standardLayoutShowList } from '../../../utils/update/all/cockpitLayout/standard';
import { inboarMotorShowList } from '../../../utils/update/all/motorization/inboardMotor';
import { platformShowList } from '../../../utils/update/all/platform';

export default class Card23 extends Card {
    

    constructor(configuratorRef) {
        super('model23', configuratorRef);
    }

    setModelConfiguration(api) {
        setBoatModel('23', api);
        
        standardDefaultConfiguration(api);

        setHasInboardMotor(true, api);
        setInboardMotorCount(1, api);
        setCockpitLayout('standard', api);
        setInnerCushioning('tonicDiamonds', api);            
        setPlatformVisible('permateekBathingPlatform', api);
        setHasFrontGuardRail(true, api);
        setHasStarboardBench(true, api);
        setThrottleCount('single', api);

        setMotorization('1x inboard', api);
    }

    loadDefaultConfiguration(api) {
        hideAll(api);
        let showList = [];

        showList.push(getRegexForFloorMainBlack());

        getHasPiping(api) ? showList.push.apply(showList, getRegexForPiping(api)) : '';
        
        showList.push(getRegexForHullLowerColors(api));
        showList.push(getRegexForHullUpperColors(api));
        getRegexForRoofColors(api) != '' ? showList.push(getRegexForRoofColors(api)) : '';
        showList.push.apply(showList, getRegexForSideRails(api));

        showList.push(getRegexForHullPlaning()); 
        
        showList = [ 
            ...showList, 
            ...inboarMotorShowList(api),
            ...platformShowList(api),
            ...standardLayoutShowList(api),
        ];

        showList.push(getRegexForDeckTable());
        
        showList.push(getRegexForHullLogosForModel(api));
        
        showList.push(getRegexForRoofLogosForModel(api));

        showList.push(getRegexForFrontGuardRail());

        showElementList(showList, api);
    }

}
