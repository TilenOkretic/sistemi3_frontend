import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { loadCodriverSeat } from '../../codriverSeat';
import { addGalleyKitchen } from '../../galleyKitchen';
import { addRearBench } from '../../rearBench';
import { loadStarboardBench } from '../../starboardBench';

let rearBenchConfigurationFuntionMap = {
    'rearBench': (api) => addRearBench(api),
    'starboardBench': (api) => loadStarboardBench(api),
    'galleyKitchen': (api) => addGalleyKitchen(api),
    'codriverSeat': (api) => loadCodriverSeat(api),
};

export let createRearBenchConfigurationListItem = (id, api) => {
    let btn = createHTMLButton(`extra-rearbenchconfiguration-${id}-btn`, `extra-rearbenchconfiguration-${id}`, api);
    btn.addEventListener('click', () => {
        rearBenchConfigurationFuntionMap[id](api);
        // setImageOfHTMLButton('extra-siderails-img', `extra-siderail-${id}`, api);
    });
    return btn;
};
