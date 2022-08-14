import Component from '../../sketchfab_webpack_engine/component';
import { createColorPickerButton } from '../utils/component/colorSelection/button';
import { openColorMenu } from '../utils/menu';
import { createColorListFull, createColorListLower, createColorListUpper } from '../utils/component/colorSelection/colorList';
import { getDeckColor, getHullColor } from '../config/getters/colorSelection';
import { showSelection } from '../../sketchfab_webpack_engine/utils/selection';

export default class ColorSelection extends Component {

    constructor(api) {
        super('color-selection', api);
    }

    /**
     * This function was not moved beacuse it functions the same for every model 
     */
    async setupComponent(api) {

        let COLOR_LIST_UPPER = await createColorListUpper(api);
        let COLOR_LIST_LOWER = await createColorListLower(api);
        let COLOR_LIST_FULL = await createColorListFull(api);

        let LWR_BTN = await createColorPickerButton(api, 'lwr-btn');
        let UPR_BTN = await createColorPickerButton(api, 'upr-btn');
        let FLL_BTN = await createColorPickerButton(api, 'fll-btn');
        
        this.addSubElement(UPR_BTN);
        this.addSubElement(LWR_BTN);
        this.addSubElement(FLL_BTN);
        this.addSubElement(COLOR_LIST_UPPER);
        this.addSubElement(COLOR_LIST_LOWER);
        this.addSubElement(COLOR_LIST_FULL);

        openColorMenu('upper');
        showSelection(`color-hull-upper-${getDeckColor(api)}`);
        showSelection(`color-hull-lower-${getHullColor(api)}`);
    }
}
