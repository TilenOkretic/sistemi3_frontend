import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { createHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { createSideRailListItem } from './item';

let composeSideRailsList = (parent, api) => {
    parent.appendChild(createSideRailListItem('chrome', api));
    parent.appendChild(createSideRailListItem('black', api));
};

let createSideRailsList = (api) => {
    let out = createHTMLList('siderail-list');
    addClass(out, 'indent');
    addClass(out, 'flex-column');
    composeSideRailsList(out, api);
    return out;
};

export {
    composeSideRailsList,
    createSideRailsList,
};
