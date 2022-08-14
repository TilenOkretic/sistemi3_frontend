import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createLayoutButton } from '../../../../utils/component/cockpitLayout';
export default (parent, api) => {
    let STANDARD_LAYOUT = createLayoutButton(api, 'standard');
    let PASSENGER_LAYOUT = createLayoutButton(api, 'passenger');

    parent.addSubElement(STANDARD_LAYOUT);
    parent.addSubElement(PASSENGER_LAYOUT);
        
    showSelection(STANDARD_LAYOUT);
};
