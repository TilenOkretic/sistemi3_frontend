import Component from '../../sketchfab_webpack_engine/component';
import roofSolutions21 from '../models/model21/components/roofSolutions';
import roofSolutions23 from '../models/model23/components/roofSolutions';
import roofSolutions25 from '../models/model25/components/roofSolutions';
import roofSolutions28 from '../models/model28/components/roofSolutions';
import roofSolutions32 from '../models/model32/components/roofSolutions';

export default class RoofSolutions extends Component {

    constructor(api) {
        super('roof-solutions', api);
        this.addSetupComponentForModel('model21', roofSolutions21);
        this.addSetupComponentForModel('model23', roofSolutions23);
        this.addSetupComponentForModel('model25', roofSolutions25);
        this.addSetupComponentForModel('model28', roofSolutions28);
        this.addSetupComponentForModel('model32', roofSolutions32);
    }

    // async setupComponent(api) {

    //     let ROOF_LIST = await createRoofColorList('hht', api);
    //     let ROOF_LIST_TTOP = await createRoofColorList('ttop', api);

    //     let noRBTN = createRoofButton('no', api);
    //     let hhtBTN = createRoofButton('hht', api);
    //     let ttRBTN = createRoofButton('ttop', api);
    //     let bsmBTN = createRoofButton('bsm', api);
    //     let bstBTN = createRoofButton('bst', api);
    //     let bshBTN = createRoofButton('bsh', api);

    //     this.addSubElement(noRBTN);
    //     this.addSubElement(hhtBTN);
    //     this.addSubElement(ROOF_LIST);
    //     if (!api.isModel21()) {
    //         this.addSubElement(ttRBTN);
    //         this.addSubElement(ROOF_LIST_TTOP);
    //     }

    //     api.isModelCabin() ? this.addSubElement(bstBTN) : api.isModelCabinEvo() ? this.addSubElement(bsmBTN) : '';
    //     !api.isModel21() ? this.addSubElement(bshBTN) : '';

    //     showSelection(hhtBTN);
    //     showSelection('color-roof-hht-darkAntracite');
    // }
}
