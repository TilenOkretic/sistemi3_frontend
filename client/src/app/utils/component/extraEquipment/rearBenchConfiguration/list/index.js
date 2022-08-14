import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { createRearBenchConfigurationListItem } from './item';

let composeRearBenchConfigurationList = (parent, api) => {
    parent.appendChild(createRearBenchConfigurationListItem('rearBench', api));
    parent.appendChild(createRearBenchConfigurationListItem('starboardBench', api));
    parent.appendChild(createRearBenchConfigurationListItem('galleyKitchen', api));
    parent.appendChild(createRearBenchConfigurationListItem('codriverSeat', api));
};

let createRearBenchConfigurationList = (api) => {
    let out = createHTMLList('rearbenchconfiguration-list');
    addClass(out, 'indent');
    addClass(out, 'flex-column');
    composeRearBenchConfigurationList(out, api);
    return out;
};

export {
    createRearBenchConfigurationList
};
