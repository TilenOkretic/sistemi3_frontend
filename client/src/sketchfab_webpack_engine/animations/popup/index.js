import { clearAnimation } from '../clearAnimation';
import { setAnimation } from '../setters';

/**
 * 
 * @param {DOMElement} dom 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
let addPopOutAnimationToDOM = (dom, api) => {
    setAnimation(dom, 'popOut', api ? `${api.animationSpeed}ms` : '100ms', 'linear');
};

/**
 * 
 * @param {String} alertText - text message to be dispalyed
 * @param {String} affectedDomElementId - DOM element id
 * @param {Sketchfab API object} api - JSON object holding all application data  
 */
let playPopupNotValidAnimation = (alertText, affectedDomElementId, api) => {
    addPopOutAnimationToDOM(document.querySelector(`#${affectedDomElementId}`), api);
    setTimeout(() => {
        clearAnimation(document.querySelector(`#${affectedDomElementId}`));
        setTimeout(() => {
            alert(alertText);
        }, 250);
    }, api.animationSpeed);  
};

export {
    addPopOutAnimationToDOM,
    playPopupNotValidAnimation,
};
