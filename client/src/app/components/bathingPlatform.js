import Component from '../../sketchfab_webpack_engine/component';
import { setIdOfDOM } from '../../sketchfab_webpack_engine/utils/dom/setters';
import { showSelection } from '../../sketchfab_webpack_engine/utils/selection';
import { getIsPlatformVisible } from '../config/getters/bathingPlatform';
import { getHasOutboardMotor } from '../config/getters/hullAndMotorization';
import { createPlatformButton } from '../utils/component/bathingPlatform';
import { removePlatformOption } from '../utils/component/bathingPlatform/platformUtil';

export default class BathingPlatform extends Component {

    constructor(api) {
        super('bathing-platform', api);
    }

    /**
     * This function was not moved beacuse it functions the same for every model 
     */
    async setupComponent() {

        let noPBTN = createPlatformButton(this.api, 'no-platform');
        let pbpflPBTN = createPlatformButton(this.api, 'pbpfl-platform');

        this.addSubElement(noPBTN);
        this.addSubElement(pbpflPBTN);

        setIdOfDOM(this.dockItem.parentElement.childNodes[0], 'platform-option-button');
        getHasOutboardMotor(this.api) ? removePlatformOption() : '';

        getIsPlatformVisible(this.api) ? showSelection(pbpflPBTN) : showSelection(noPBTN);
    }
}
