import { getDomFromReference } from '../../utils/dom/getters';
import { validateString } from '../../utils/validation';

/**
 * 
 * @param {DOMElement | String} domRef = reference to the dom element
 * @param {String} animationName 
 * @param {Number} animationDuration - in ms
 * @param {String} animationType - ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) 
 * @returns 
 */
let setAnimation = (domRef, animationName, animationDuration, animationType) => {
    setAnimationName(domRef, animationName);
    setAnimationDuration(domRef, animationDuration);
    setAnimationType(domRef, animationType);
};


let setAnimationName = (domRef, animationName) => {
    validateString(animationName);
    let dom = getDomFromReference(domRef);
    dom.style.animationName = animationName;
};

let setAnimationDuration = (domRef, animationDuration) => {
    validateString(animationDuration);
    let dom = getDomFromReference(domRef);
    dom.style.animationDuration = animationDuration;
};

let setAnimationType = (domRef, animationType) => {
    validateString(animationType);
    let dom = getDomFromReference(domRef);
    dom.style.animationType = animationType;
};

let setAnimationIterationCount = (domRef,  iterCount) => {
    let dom = getDomFromReference(domRef);
    validateString(iterCount);
    dom.style.animationIterationCount = iterCount;
};

export {
    setAnimation,
    setAnimationName,
    setAnimationDuration,
    setAnimationType,
    setAnimationIterationCount,
};
