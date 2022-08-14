import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { createTableConfigurationListItem } from './item';

let composeTableConfigurationList = (parent, api) => {
    parent.appendChild(createTableConfigurationListItem('normal', api));
    !api.isModel21() ? parent.appendChild(createTableConfigurationListItem('loungeLayout', api)) : '';
    // TODO: lounge layout table with cushions
};

let createTableConfigurationList = (api) => {
    let out = createHTMLList('tableconfiguration-list');
    addClass(out, 'indent');
    addClass(out, 'flex-column');
    composeTableConfigurationList(out, api);
    return out;
};

export {
    createTableConfigurationList
};
