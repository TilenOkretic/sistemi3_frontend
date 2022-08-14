import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createRoofButton } from '../../../../utils/component/roofSolutions';
import { createRoofColorList } from '../../../../utils/component/roofSolutions/roofList';

export default (parent, api) => {
    
    let ROOF_LIST = createRoofColorList('hht', api);

    let noRBTN = createRoofButton('no', api);
    let hhtBTN = createRoofButton('hht', api);

    parent.addSubElement(noRBTN);
    parent.addSubElement(hhtBTN);
    parent.addSubElement(ROOF_LIST);

    showSelection(hhtBTN);
    showSelection('color-roof-hht-darkAntracite');
};
