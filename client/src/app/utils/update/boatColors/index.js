import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getIsPlatformVisible } from '../../../config/getters/bathingPlatform';
import { getRegexForHullLowerColors } from '../../../regexLib/hull/lower';
import { getRegexForHullUpperColors } from '../../../regexLib/hull/upper';
import { getRegexForRearPlatform } from '../../../regexLib/bathingPlatform';
import { getRegexForRearPlatform21Color } from '../../../regexLib/bathingPlatform/model21/color';
import { getRegexForRearPlatformOutboardEngine } from '../../../regexLib/bathingPlatform/model32';
import { getRegexForRearPlatformOutboardEngineColor } from '../../../regexLib/bathingPlatform/outboardEngine/color';
import { getIsCockpitLayoutLounge } from '../../../config/getters/cockpitLayout';
import { getRegexForLoungeLayoutInsert } from '../../../regexLib/cockpitLayout/lounge/insert';
import { validateAPI } from '../../../../sketchfab_webpack_engine/utils/validation/api';

let platformRegexMap = {
    21: (api) => getRegexForRearPlatform21Color(api),
    23: (api) => getRegexForRearPlatform(api), 
    25: (api) => getRegexForRearPlatformOutboardEngine(api),
    28: (api) => getRegexForRearPlatform(api),
    32: (api) => getRegexForRearPlatformOutboardEngine(api),
};

export let updateBoatColors = (api) => {
    if(!validateAPI(api)) return;

    let platformRegex = getIsPlatformVisible(api) ? platformRegexMap[api.getBoatModel()](api) : [];
    let outboardEnginePlatform = api.isModelOutboard() ? [ getRegexForRearPlatformOutboardEngineColor(api) ] : [];
    let loungeLayoutInsert = getIsCockpitLayoutLounge(api) ? [ getRegexForLoungeLayoutInsert(api) ] : [];
    let showReg = [ getRegexForHullLowerColors(api), getRegexForHullUpperColors(api), ...platformRegex, ...outboardEnginePlatform, ...loungeLayoutInsert ];
    showElementList(showReg, api);
};
