import { createHTMLButton } from '../../../../sketchfab_webpack_engine/utils/buttons';
import { loadBimini } from './bimini';
import { loadBiminiSpyhood } from './biminiSpyhood';
import { loadBiminiStandard } from './biminiStandard';
import { loadHHTRoof } from './hht';
import { removeRoof } from './removeRoof';
import { loadTTopRoof } from './ttop';

let roofSolutionsImageMap = {
    'no': 'noRoof',
    'hht': 'hydraulicHardTopRoof',
    'ttop': 'TTopRoof',
    'bsm': 'biminiSmall',
    'bst': 'biminiSmall',
    'bsh': 'biminiSpyhood',
};

let roofSolutionsFunctionMap = {
    'no': (api) => removeRoof(api),
    'hht': (api) => loadHHTRoof(api),
    'ttop': (api) => loadTTopRoof(api),
    'bsm': (api) => loadBimini(api),
    'bst': (api) => loadBiminiStandard(api),
    'bsh': (api) => loadBiminiSpyhood(api),
};

export let createRoofButton = (id, api) => {
    let btn = createHTMLButton(`roofSolutions-${id}-btn`, roofSolutionsImageMap[id], api);
    btn.addEventListener('click', () => roofSolutionsFunctionMap[id](api));
    return btn;
};
