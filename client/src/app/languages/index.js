import { createLanguageButton } from '../../sketchfab_webpack_engine/languages/button';

let setupLanguageButtons = (api) => {
    createLanguageButton(api, 'en');
    createLanguageButton(api, 'de');
    createLanguageButton(api, 'fr');
    createLanguageButton(api, 'nl');
    createLanguageButton(api, 'es');
};

export default setupLanguageButtons;
