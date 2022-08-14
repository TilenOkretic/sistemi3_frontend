import Card from '../../../../sketchfab_webpack_engine/card';
import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasFrontGuardRail, getHasMarineCarpet, getHasWindshield } from '../../../config/getters/extraEquipment';
import standardDefaultConfiguration from '../../../config/getters/standardDefaultConfiguration';
import { getHasPiping } from '../../../config/getters/upholstery';
import { setBoatModel } from '../../../config/setters/boatModel';
import { setCockpitLayout } from '../../../config/setters/cockpitLayout';
import { setHasDeckTable, setHasWindshield, setSteeringWheelType } from '../../../config/setters/extraEquipment';
import { setElectricInboardEngineCount, setHasElectricPropulsion, setMotorization, setThrottleCount } from '../../../config/setters/hullAndMotorization';
import { setInnerCushioning } from '../../../config/setters/upholstery';
import { getRegexForDeckTable } from '../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForMarineCarpet } from '../../../regexLib/extraEquipment/marineCarpet';
import { getRegexForWindshield } from '../../../regexLib/extraEquipment/windshield';
import { getRegexForHullLowerColors } from '../../../regexLib/hull/lower';
import { getRegexForHullUpperColors } from '../../../regexLib/hull/upper';
import { getRegexForHullLogosForModel, getRegexForRoofLogosForModel } from '../../../regexLib/logos';
import { getRegexForPiping } from '../../../regexLib/piping/cockpitLayout';
import { getRegexForRoofColors } from '../../../regexLib/roofSolutions';
import { getRegexForSideRails } from '../../../regexLib/sideRails';
import { getRegexForFrontGuardRail } from '../../../regexLib/sideRails/frontguardRail';
import { getRegexForConsoleSteeringWheel } from '../../../regexLib/steeringWheel';
import { hideAll } from '../../../utils/dictionary/boatDictionaryUtil';
import { consoleLayoutCentralShowList } from '../../../utils/update/all/cockpitLayout/consoleSide';
import { model21ShowList } from '../../../utils/update/all/motorization/model21';
import { setPlatformVisible } from '../../../config/setters/bathingPlatform';
import { setSideRailType } from '../../../config/setters/sideRails';

export class Card21 extends Card {
    
    constructor(configuratorRef) {
        super('model21', configuratorRef);
    }

    setModelConfiguration(api) {
        setBoatModel('21', api);

        standardDefaultConfiguration(api);

        setHasElectricPropulsion(true, api);
        setElectricInboardEngineCount(1, api);
        setCockpitLayout('central', api);
        setInnerCushioning('tonic', api);
        setHasWindshield('true', api);
        setThrottleCount('single', api);
        setSteeringWheelType('rubber', api);
        setHasDeckTable(true, api);
        
        setPlatformVisible('noPlatform', api);
        setSideRailType('chrome', api);

        setMotorization('1x electric-inboard', api);
    }

    loadDefaultConfiguration(api) {

        // alert('This model does not work with this version of the app!\nPlease select one of the following models: 23 or 25');
        // window.location.reload();

        hideAll(api);

        let showList = [];

        getHasPiping(api) ? showList.push.apply(showList, getRegexForPiping(api)) : '';
        
        showList.push(getRegexForHullLowerColors(api));
        showList.push(getRegexForHullUpperColors(api));
        getRegexForRoofColors(api) != '' ? showList.push(getRegexForRoofColors(api)) : '';
        showList.push.apply(showList, getRegexForSideRails(api));

        showList = [ 
            ...showList, 
            ...model21ShowList(api),
            ...consoleLayoutCentralShowList(api),
        ];

        showList.push(getRegexForDeckTable());

        showList.push(getRegexForConsoleSteeringWheel(api));

        showList.push(getRegexForHullLogosForModel(api));
        
        showList.push(getRegexForRoofLogosForModel(api));

        getHasFrontGuardRail(api) ? showList.push(getRegexForFrontGuardRail()) : '';

        if (getHasMarineCarpet(api)) {
            showList.push(getRegexForMarineCarpet());
        }

        getHasWindshield(api) ? showList.push.apply(showList, getRegexForWindshield()) : '';

        showElementList(showList, api);
    }
}
