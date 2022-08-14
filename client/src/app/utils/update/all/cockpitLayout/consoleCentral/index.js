import { getIsCockpitLayoutSide } from '../../../../../config/getters/cockpitLayout';
import { getRegexForConsoleLayout } from '../../../../../regexLib/cockpitLayout/console';

export let consoleLayoutSideShowList = (api) => {
    if (!getIsCockpitLayoutSide(api)) { 
        return [];
    }
    return getRegexForConsoleLayout(api);
};
