import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createRoofButton } from '../../../../utils/component/roofSolutions';
import { createRoofColorList } from '../../../../utils/component/roofSolutions/roofList';

export default (parent, api) => {

    let ROOF_LIST = createRoofColorList('hht', api);
    let ROOF_LIST_TTOP = createRoofColorList('ttop', api);

    let noRBTN = createRoofButton('no', api);
    let hhtBTN = createRoofButton('hht', api);
    let ttRBTN = createRoofButton('ttop', api);
    let bstBTN = createRoofButton('bst', api);
    let bshBTN = createRoofButton('bsh', api);

    parent.addSubElement(noRBTN);
    parent.addSubElement(hhtBTN);
    parent.addSubElement(ROOF_LIST);
    parent.addSubElement(ttRBTN);
    parent.addSubElement(ROOF_LIST_TTOP);
    parent.addSubElement(bstBTN);
    parent.addSubElement(bshBTN);

    showSelection(hhtBTN);
    showSelection('color-roof-hht-darkAntracite');
};
