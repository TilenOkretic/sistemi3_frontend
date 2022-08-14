import { showElementList } from '../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasPiping } from '../../../config/getters/upholstery';
import { setCockpitLayout } from '../../../config/setters/cockpitLayout';
import { piping } from '../../component/upholstery/piping';

export let setLayout = (api, layoutType, showRegex) => {
    setCockpitLayout(layoutType, api);
    piping(getHasPiping(api), api);
    showElementList(showRegex, api);
};
