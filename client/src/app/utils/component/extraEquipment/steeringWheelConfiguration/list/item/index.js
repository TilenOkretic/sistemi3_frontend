import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { addSteeringWheelRubber } from '../../rubber';
import { addSteeringWheelWood } from '../../wood';

let SteeringWheelConfigurationFuntionMap = {
    'rubber': (api) => addSteeringWheelRubber(api),
    'wood': (api) => addSteeringWheelWood(api), 
};

export let createSteeringWheelConfigurationListItem = (id, api) => {
    let btn = createHTMLButton(`extra-steeringwheel-${id}`, `extra-steeringwheel-${id}`, api);
    btn.addEventListener('click', () => {
        SteeringWheelConfigurationFuntionMap[id](api);
        // setImageOfHTMLButton('extra-siderails-img', `extra-siderail-${id}`, api);
    });
    return btn;
};
