import Component from '../../sketchfab_webpack_engine/component';
import extraEquipment21 from '../models/model21/components/extraEquipment';
import extraEquipment23 from '../models/model23/components/extraEquipment';
import extraEquipment25 from '../models/model25/components/extraEquipment';
import extraEquipment28 from '../models/model28/components/extraEquipment';
import extraEquipment32 from '../models/model32/components/extraEquipment';

export default class ExtraEquipment extends Component {

    constructor(api) {
        super('extra-equipment', api);
        this.addSetupComponentForModel('model21', extraEquipment21);
        this.addSetupComponentForModel('model23', extraEquipment23);
        this.addSetupComponentForModel('model25', extraEquipment25);
        this.addSetupComponentForModel('model28', extraEquipment28);
        this.addSetupComponentForModel('model32', extraEquipment32);
    }
}
