import { setAnimation } from '../../../animations/setters';
import { addClass } from '../../dom';

/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
export let closeConfiguratorMenu = (api) => {
    let container = document.querySelector('#container');
    let wrapper = document.querySelector('#dock-wrapper');

    let animationSpeed = api ? api.animationSpeed : 0;

    if (!api.isMobile) {
        if (!container.classList.contains('w-0')) {
            addClass(wrapper, 'opaque');
            addClass(wrapper, 'overflow-hidden');
            
            setAnimation(container, 'extendWidthBack', `${animationSpeed}ms`, 'linear');
            
            setTimeout(() => {
                addClass(container, 'p-0');
                addClass(container, 'w-0');
            }, animationSpeed);
        }
    }
};
