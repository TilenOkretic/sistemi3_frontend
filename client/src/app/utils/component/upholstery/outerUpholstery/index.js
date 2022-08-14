import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { openTapestryMenu } from '../tapestryMenu';

export let loadOuterUpholstery = () => {
    openTapestryMenu('outer');
    clearSelection('upholstery-inner-btn');
};
