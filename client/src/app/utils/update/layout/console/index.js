import { hideElement, hideElementList, showElementList } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { getHasRearBench } from '../../../../config/getters/extraEquipment';
import { getHasPiping } from '../../../../config/getters/upholstery';
import { piping } from '../../../component/upholstery/piping';
import { updateCushioning } from '../../tapestry';

export let updateConsoleLayout = (api, hideRegex, showRegex) => {
    !getHasRearBench(api) ? hideElement('cushioning.rearBench.piping.001', api) : '';

    hideElementList(hideRegex, api);
    showElementList(showRegex, api);
    updateCushioning(api);
    piping(getHasPiping(api), api);
};
