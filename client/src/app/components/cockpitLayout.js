import Component from '../../sketchfab_webpack_engine/component';
import cockpitLayout21 from '../models/model21/components/cockpitLayout';
import cockpitLayout23 from '../models/model23/components/cockpitLayout';
import cockpitLayout25 from '../models/model25/components/cockpitLayout';
import cockpitLayout28 from '../models/model28/components/cockpitLayout';
import cockpitLayout32 from '../models/model32/components/cockpitLayout';

export default class CockpitLayout extends Component {

    constructor(api) {
        super('cockpit-layout', api);
        this.addSetupComponentForModel('model21', cockpitLayout21);
        this.addSetupComponentForModel('model23', cockpitLayout23);
        this.addSetupComponentForModel('model25', cockpitLayout25);
        this.addSetupComponentForModel('model28', cockpitLayout28);
        this.addSetupComponentForModel('model32', cockpitLayout32);
    }

    // async setupComponent(api) {
    //     let STANDARD_LAYOUT;
    //     let PASSENGER_LAYOUT;
    //     let CONSOLE_CENTER;
    //     let CONSOLE_SIDE;

    //     if (!api.isModel21()) {
    //         STANDARD_LAYOUT = await createLayoutButton(api, 'standard');
    //         PASSENGER_LAYOUT = await createLayoutButton(api, 'passenger');
    //     } else {
    //         CONSOLE_CENTER = await createLayoutButton(api, 'central');
    //         CONSOLE_SIDE = await createLayoutButton(api, 'side');
    //     }

    //     this.addSubElement(STANDARD_LAYOUT);
    //     this.addSubElement(PASSENGER_LAYOUT);
    //     this.addSubElement(CONSOLE_CENTER);
    //     this.addSubElement(CONSOLE_SIDE);
 
    //     api.isModel21() ? showSelection(CONSOLE_CENTER) : showSelection(STANDARD_LAYOUT);
    // }

}
