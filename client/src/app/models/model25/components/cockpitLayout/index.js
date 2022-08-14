import { showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { createLayoutButton } from '../../../../utils/component/cockpitLayout';
export default (parent, api) => {
    let STANDARD_LAYOUT = createLayoutButton(api, 'standard');
    let PASSENGER_LAYOUT = createLayoutButton(api, 'passenger');
    let LOUNGE_LAYOUT = createLayoutButton(api, 'lounge');

    parent.addSubElement(STANDARD_LAYOUT);
    parent.addSubElement(PASSENGER_LAYOUT);
    parent.addSubElement(LOUNGE_LAYOUT);
        
    showSelection(STANDARD_LAYOUT);
};
