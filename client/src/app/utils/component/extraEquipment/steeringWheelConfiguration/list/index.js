import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { createSteeringWheelConfigurationListItem } from './item';

let composeSteeringWheelConfigurationList = (parent, api) => {
    parent.appendChild(createSteeringWheelConfigurationListItem('rubber', api));
    parent.appendChild(createSteeringWheelConfigurationListItem('wood', api));
};

let createSteeringWheelConfigurationList = (api) => {
    let out = createHTMLList('steeringwheel-list');
    addClass(out, 'indent');
    addClass(out, 'flex-column');
    composeSteeringWheelConfigurationList(out, api);
    return out;
};

export {
    createSteeringWheelConfigurationList
};
