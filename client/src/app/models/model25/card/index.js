import Card from '../../../../sketchfab_webpack_engine/card';
import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import standardDefaultConfiguration from '../../../config/getters/standardDefaultConfiguration';
import { getHasPiping } from '../../../config/getters/upholstery';
import { setPlatformVisible } from '../../../config/setters/bathingPlatform';
import { setBoatModel } from '../../../config/setters/boatModel';
import { setCockpitLayout } from '../../../config/setters/cockpitLayout';
import { setHasFrontGuardRail } from '../../../config/setters/extraEquipment';
import { setHasStarboardBench } from '../../../config/setters/extraEquipment/starboardBench';
import { setHasOutboardMotor, setMotorization, setOutboardMotorCount, setThrottleCount } from '../../../config/setters/hullAndMotorization';
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
import { outboardMotorShowList } from '../../../utils/update/all/motorization/outboardMotor';

export default class Card25 extends Card {
    
    constructor(configuratorRef) {
        super('model25', configuratorRef);
    }

    setModelConfiguration(api) {
        setBoatModel('25', api);
        
        standardDefaultConfiguration(api);

        setHasOutboardMotor(true, api);
        setOutboardMotorCount(1, api);
        setCockpitLayout('standard', api);
        setInnerCushioning('tonicDiamonds', api);
        setHasFrontGuardRail(true, api);
        setHasStarboardBench(true, api);            
        setThrottleCount('single', api);

        setPlatformVisible('noPlatform', api);

        setMotorization('1x outboard', api)
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
            ...outboardMotorShowList(api),
            ...standardLayoutShowList(api),
        ];
        
        showList.push(getRegexForDeckTable());

        showList.push(getRegexForHullLogosForModel(api));
        showList.push(getRegexForRoofLogosForModel(api));

        showList.push(getRegexForFrontGuardRail());
        
        showElementList(showList, api);
    }
}
