import { addClass, createElement } from '../../utils/dom';
import { validateAPI } from '../../utils/validation/api';
import { setLang } from '../setters';
/**
 * Creates an HTML button and appends it to the lang-btn-holder div element
 * Button has an image that is pulled from alfastreet page :O
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @param {String} lang - language abbreviation
 */
// TODO: change the image picture loading so that it is not pulled from alfastreet !!
export let createLanguageButton = (api, lang) => {

    if(!validateAPI(api)) return;

    let parent = document.querySelector('#lang-btn-holder');

    let imagePrefix = 'https://alfastreet-marine.com/wp-content/plugins/sitepress-multilingual-cms/res/flags';

    let titleMap = {
        'en': 'English', 
        'de': 'German', 
        'fr': 'French', 
        'nl': 'Dutch', 
        'es': 'Spanish' 
    };

    let className = 'lang-btn';
    let id = `lang-${lang}`;

    let title = titleMap[lang];

    let btn = createElement('button', id);
    addClass(btn, className);
    addClass(btn, 'bg-transparent');
    addClass(btn, 'border-none');
    addClass(btn, 'button-hover');
    btn.title = title;

    let bImg = createElement('img', `${id}-img`);
    bImg.alt = title;
    bImg.src = `${imagePrefix}/${lang}.png`;
    addClass(bImg, 'wpml-ls-flag');

    let elan = id.split('-')[1];
    btn.addEventListener('click', () => {
        setLang(api, elan);
    });

    btn.appendChild(bImg);
    parent.appendChild(btn);
};
