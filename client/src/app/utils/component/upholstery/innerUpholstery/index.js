import { clearSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { openTapestryMenu } from '../tapestryMenu';

export let loadInnerUpholstery = () => {
    openTapestryMenu('inner');
    clearSelection('upholstery-outer-btn');
};
