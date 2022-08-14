import Component from '../../sketchfab_webpack_engine/component';
import { showSelection } from '../../sketchfab_webpack_engine/utils/selection';
import { createTapestryButton } from '../utils/component/upholstery';
import { createTapestryList } from '../utils/component/upholstery/tapestryLists';
import { openTapestryMenu } from '../utils/component/upholstery/tapestryMenu';

export default class Upholstery extends Component {

    constructor(api) {
        super('upholstery', api);
    }

    /**
     * This function was not moved because it functions the same for each model 
     */
    async setupComponent(api) {
        let TAPESTRY_LIST_OUTER = await createTapestryList('outer', api);
        let TAPESTRY_LIST_INNER = await createTapestryList('inner', api);
        
        let OUT_BTN = await createTapestryButton(api, 'outer-btn');
        let INN_BTN = await createTapestryButton(api, 'inner-btn');
        let PIP_BTN = await createTapestryButton(api, 'piping-btn');

        this.addSubElement(INN_BTN);
        this.addSubElement(OUT_BTN);
        this.addSubElement(TAPESTRY_LIST_OUTER);
        this.addSubElement(TAPESTRY_LIST_INNER);
        this.addSubElement(PIP_BTN);

        openTapestryMenu('inner');
        showSelection(INN_BTN);
        showSelection(PIP_BTN);
    }
}
