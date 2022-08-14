import Component from '../../sketchfab_webpack_engine/component';
import hullAndMotorization21 from '../models/model21/components/hullAndMotorization';
import hullAndMotorization23 from '../models/model23/components/hullAndMotorization';
import hullAndMotorization25 from '../models/model25/components/hullAndMotorization';
import hullAndMotorization28 from '../models/model28/components/hullAndMotorization';
import hullAndMotorization32 from '../models/model32/components/hullAndMotorization';

export default class HullAndMotorization extends Component {

    constructor(api) {
        super(`hull-and-motorization${api.isModel21() ? '-21' : ''}`, api);
        this.addSetupComponentForModel('model21', hullAndMotorization21);
        this.addSetupComponentForModel('model23', hullAndMotorization23);
        this.addSetupComponentForModel('model25', hullAndMotorization25);
        this.addSetupComponentForModel('model28', hullAndMotorization28);
        this.addSetupComponentForModel('model32', hullAndMotorization32);
    }

    // async setupComponent(api) {
    //     let DISPLACEMENT_BTN;
    //     let PLANING_BTN;
    //     let ELECTRIC_PROPULSION_BTN;
    //     let MOTOR_PROPULSION_BTN;

    //     if (api.isModel21()) {
    //         ELECTRIC_PROPULSION_BTN = await createMotorizationButton(api, 'electric-propulsion-btn ');
    //         MOTOR_PROPULSION_BTN = await createMotorizationButton(api, 'motor-propulsion-btn ');
    //     } else {
    //         PLANING_BTN = await createMotorizationButton(api, 'planing-btn');
    //         DISPLACEMENT_BTN = api.isModelInboard() ? await createMotorizationButton(api, 'disp-btn') : null;
    //     }

        
    //     api.isModel21() ? showSelection(ELECTRIC_PROPULSION_BTN) : showSelection(PLANING_BTN);

    //     this.addSubElement(DISPLACEMENT_BTN);
    //     this.addSubElement(PLANING_BTN);
    //     this.addSubElement(ELECTRIC_PROPULSION_BTN);
    //     this.addSubElement(MOTOR_PROPULSION_BTN);
    // }

}
