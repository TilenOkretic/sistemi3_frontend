import { getTranslation } from '../../languages/getters';
import { addClass } from '../../utils/dom';
import { Translator } from '../translator';


/**
 * Creates the loading ... animation
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
// TODO: translator validation
export let wordsSpin = async (api) => {
    if(!api.TRANSLATOR) {
        let lang = this.getLangFromURL();
        api.TRANSLATOR = await Translator(api, lang);
    }

    let i = 1;
    let words = getTranslation(api, 'loadingtext');
    let loadingSpan = document.querySelector('#loading-span');
    addClass(loadingSpan, 'text-capitalize');
    loadingSpan.textContent = words[0].toLowerCase();
    addClass(loadingSpan, 'popInOutElement');
    
    loadingSpan.addEventListener('animationend', () => {
        if (i > words.length - 1) {
            i = 0;
        }
        loadingSpan.textContent = words[i].toLowerCase();
        i++;

        loadingSpan.style.animation = 'none';
        loadingSpan.offsetHeight;
        loadingSpan.style.animation = null;
    });
};
