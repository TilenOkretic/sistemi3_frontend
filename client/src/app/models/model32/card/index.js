import Card from '../../../../sketchfab_webpack_engine/card';
import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasDeckTable } from '../../../config/getters/extraEquipment';
import standardDefaultConfiguration from '../../../config/getters/standardDefaultConfiguration';
import { getHasPiping } from '../../../config/getters/upholstery';
import { setBoatModel } from '../../../config/setters/boatModel';
import { setCockpitLayout } from '../../../config/setters/cockpitLayout';
import { setHasFrontGuardRail, setHasMiniCupHolder } from '../../../config/setters/extraEquipment';
import { setHasStarboardBench } from '../../../config/setters/extraEquipment/starboardBench';
import { setHasOutboardMotor, setMotorization, setOutboardMotorCount, setThrottleCount } from '../../../config/setters/hullAndMotorization';
import { setInnerCushioning } from '../../../config/setters/upholstery';
import { getRegexForDeckTable } from '../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForMiniCupHolder } from '../../../regexLib/extraEquipment/miniCupHolder';
import { getRegexForHullLowerColors } from '../../../regexLib/hull/lower';
import { getRegexForHullPlaning } from '../../../regexLib/hull/planing';
import { getRegexForHullUpperColors } from '../../../regexLib/hull/upper';
import { getRegexForHullLogosForModel, getRegexForRoofLogosForModel } from '../../../regexLib/logos';
import { getRegexForPiping } from '../../../regexLib/piping/cockpitLayout';
import { getRegexForRoofColors } from '../../../regexLib/roofSolutions';
import { getRegexForSideRails } from '../../../regexLib/sideRails';
import { hideAll } from '../../../utils/dictionary/boatDictionaryUtil';
import { standardLayoutShowList } from '../../../utils/update/all/cockpitLayout/standard';
import { outboardMotorShowList } from '../../../utils/update/all/motorization/outboardMotor';
import { platformShowList } from '../../../utils/update/all/platform';
import { setPlatformVisible } from '../../../config/setters/bathingPlatform';

export default class Card32 extends Card {
    constructor(configuratorRef) {
        super('model32', configuratorRef);
    }

    setModelConfiguration(api) {
        setBoatModel('32', api);

        standardDefaultConfiguration(api);
        
        setHasOutboardMotor(true, api);
        setOutboardMotorCount(2, api);
        setCockpitLayout('standard', api),
        setInnerCushioning('tonicDiamonds', api),
        setHasFrontGuardRail(true, api);
        setHasStarboardBench(true, api);
        setHasMiniCupHolder(true, api);
        setThrottleCount('dual', api);

        setPlatformVisible('noPlatform', api);

        setMotorization('2x outboard', api);
    }

    loadDefaultConfiguration(api) {
        
        alert('This model does not work with this version of the app!\nPlease select one of the following models: 23 or 25');
        window.location.reload();

        hideAll(api);

        let showList = [];
        
        getHasPiping(api) ? showList.push.apply(showList, getRegexForPiping(api)) : '';
        
        showList.push(getRegexForHullLowerColors(api));
        showList.push(getRegexForHullUpperColors(api));
        getRegexForRoofColors(api) != '' ? showList.push(getRegexForRoofColors(api)) : '';
        showList.push.apply(showList, getRegexForSideRails(api));
    
        showList.push(getRegexForHullPlaning()); 
    
        showList = [ 
            ...showList, 
            ...outboardMotorShowList(api),
            ...platformShowList(api),
            ...standardLayoutShowList(api),
        ];
    
        getHasDeckTable(api) ? showList.push(getRegexForDeckTable()) : '';
        
        showList.push(getRegexForHullLogosForModel(api));
        showList.push(getRegexForRoofLogosForModel(api));
    
        showList.push(getRegexForMiniCupHolder());

        showElementList(showList, api);
    }
}
