import { setAnimation } from '../../../animations/setters';
import { removeClass } from '../../dom';

/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
export let openConfiguratorMenu = (api) => {

    let container = document.querySelector('#container');
    let wrapper = document.querySelector('#dock-wrapper');
    removeClass(container, 'p-0');
    removeClass(container, 'w-0');
    removeClass(document.querySelector('#configuration-finish'), 'button-selected');
    
    setAnimation(container, 'extendWidth', api.animationSpeed.toString(), 'linear');
    
    setTimeout(() => {
        removeClass(wrapper, 'opaque');
        removeClass(wrapper, 'overflow-hidden');
    }, api.animationSpeed);
};
