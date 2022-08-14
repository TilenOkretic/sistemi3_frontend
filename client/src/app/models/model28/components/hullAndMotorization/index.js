import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createDisplacementHullButton } from '../../../../utils/component/hullAndmotorization/displacement/button';
import { createDisplacementList } from '../../../../utils/component/hullAndmotorization/displacement/list';
import { createPlaningHullButton } from '../../../../utils/component/hullAndmotorization/planing/button';
import { createPlaningList } from '../../../../utils/component/hullAndmotorization/planing/list';

export default (parent, api) => {

    let PLANING_LIST = createPlaningList(api);
    let PLANING_BUTTON = createPlaningHullButton(api);
    
    let DISPLACEMENT_LIST = createDisplacementList(api);
    let DISPLACEMENT_BUTTON = createDisplacementHullButton(api);
    
    parent.addSubElement(DISPLACEMENT_BUTTON);
    parent.addSubElement(DISPLACEMENT_LIST);

    parent.addSubElement(PLANING_BUTTON);
    parent.addSubElement(PLANING_LIST);
            
    showSelection(PLANING_BUTTON);
};
