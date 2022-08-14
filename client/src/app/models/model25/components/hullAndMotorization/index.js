import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createPlaningHullButton } from '../../../../utils/component/hullAndmotorization/planing/button';
import { createPlaningList } from '../../../../utils/component/hullAndmotorization/planing/list';

export default (parent, api) => {
    let PLANING_LIST = createPlaningList(api);
    let PLANING_BUTTON = createPlaningHullButton(api);
            
    parent.addSubElement(PLANING_BUTTON);
    parent.addSubElement(PLANING_LIST);
            
    showSelection(PLANING_BUTTON);
};
