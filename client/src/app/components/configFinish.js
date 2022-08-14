import Component from '../../sketchfab_webpack_engine/component';
import { createValidResponseButton } from '../../sketchfab_webpack_engine/utils/buttons/response';
import { closeConfiguratorMenu } from '../../sketchfab_webpack_engine/utils/configurationMenu/close';
import { getCountryCodeFromCountryName, isValidCountry, } from '../../sketchfab_webpack_engine/countries/countries';
import { hideLoading, showLoading } from '../../sketchfab_webpack_engine/utils/loadingUtil';
import { getTranslation } from '../../sketchfab_webpack_engine/languages/getters';
import { playPopupNotValidAnimation } from '../../sketchfab_webpack_engine/animations/popup';
import { appendElementList, removeClass } from '../../sketchfab_webpack_engine/utils/dom';
import { getOrderId } from '../config/getters/configurationFinish';
import buildResponseMessage from '../utils/component/configurationFinish/responseMessage/build';
import { createPopupOrderElements } from '../utils/popup/order';
import { createPopupCoutriesDropdown } from '../../sketchfab_webpack_engine/utils/popup/dropdown';
import { createPopupLabel } from '../../sketchfab_webpack_engine/utils/popup/label';
import { createEmailInput } from '../../sketchfab_webpack_engine/utils/dom/email';
import { createPopupHolders } from '../../sketchfab_webpack_engine/utils/popup/holder';
import { createPopupWrappers } from '../../sketchfab_webpack_engine/utils/popup/wrapper';
import { createOptionalInfo } from '../../sketchfab_webpack_engine/utils/popup/optionalInfo';
import { createPopupFormSubmit } from '../../sketchfab_webpack_engine/utils/popup/form';

export default class ConfigFinish extends Component {

    constructor(api) {
        super('configuration-finish', api);
        this.cardTexts = {};
    }

    addLangObject(name) {
        this.cardTexts[name] = getTranslation(this.api, name);
    }

    getLangObject(name) {
        return this.cardTexts[name];
    }

    appendToLangObject(name, string) {
        return this.cardTexts[name] += string;
    }

    updateLang() {
        this.title.textContent = getTranslation(this.api, 'configuration-finish');

        this.addLangObject('alertProcessing');
        this.addLangObject('continue');
        this.addLangObject('alertBackendError');
        this.addLangObject('enterEmail');
        this.addLangObject('extraInformation');
        this.addLangObject('allowMarketing');
        this.addLangObject('allowDataProcessing');
        this.addLangObject('submit');
        this.addLangObject('alertCountry');
        this.addLangObject('countryInputLabel');
    }

    async setupComponent() {
        this.title.addEventListener('click', async() => {
            closeConfiguratorMenu(this.api);
            removeClass(document.querySelector('#configuration-finish'), 'on-hover');
            this.api.setUserInteraction(false);

            let [ popupHolder, popupForm, popupCard, cancelOrder, desc, formMailWrapper, email, optionalInfo, submit ] = await this.buildMailPopup();

            popupForm.addEventListener('submit', async(event) => {
                event.preventDefault();
                await this.popupFormEvent(popupForm, popupCard, popupHolder, cancelOrder, optionalInfo, email);
            });

            appendElementList(popupCard, cancelOrder);
            appendElementList(popupForm, desc, formMailWrapper, submit);
            appendElementList(popupCard, popupForm);
            appendElementList(popupHolder, popupCard);
            appendElementList(document.querySelector('#app'), popupHolder);
        });
    }

    isDataProcessingAllowed() {
        if (!document.querySelector('#option-dataProcessing > input').checked) {
            playPopupNotValidAnimation(this.getLangObject('alertProcessing'), 'option-dataProcessing', this.api);
            return false;
        }
        return true;
    }

    async isCountrySelected() {
        if(document.querySelector('#option-country-input').value == '' || !await isValidCountry(document.querySelector('#option-country-input').value)) {
            playPopupNotValidAnimation(this.getLangObject('alertCountry'), 'option-country-input', this.api);
            return false;
        }
        return true;
    }

    async popupFormEvent(popupForm, popupCard, popupHolder, cancelOrder, optionalInfo, email) {
        showLoading();

        if(!this.isDataProcessingAllowed() || !await this.isCountrySelected()) {
            hideLoading();
            return;
        }
        
        // Sending the configuration to the backend and waiting for the response
        // when the server responds build a popup that give the user their order ID
        try {
            let marketing = document.querySelector('#option-marketing > input');
            let country = await getCountryCodeFromCountryName(document.querySelector('#option-country-input').value);
            
            let countryCode = `${country.cca2}-${country.cca3}-${country.cioc}-${country.ccn3}`;
            
            let request = await fetch(`${this.api.getAPIBackendURL()}/api/boatOrder`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(this.getConfigurationBody(optionalInfo, email, marketing, countryCode))
            });

            let response = await request.json();

            if (response) {
                await this.buildResponse(response, popupForm, cancelOrder, popupCard, popupHolder);
                this.api.setUserInteraction(true);
            }
        } catch (err) {
            await this.buildErrorResponse(err, popupForm, cancelOrder, popupCard, popupHolder);
            this.api.setUserInteraction(true);
            console.error(err);
        }
        
        hideLoading();
    }

    getConfigurationBody(optionalInfo, email, marketing, countryCode) {
        return { ...this.api.defaultConfig, extraInfo: optionalInfo.value, country: countryCode, sendermail: email.value, marketing: marketing.checked, orderId: getOrderId(this.api) };
    }

    async buildErrorResponse(errorMsg, popupForm, cancelOrder, popupCard, popupHolder) {
        this.appendToLangObject('alertBackendError', ` ${errorMsg}`);
        await this.buildResponse(null, popupForm, cancelOrder, popupCard, popupHolder);
    }

    buildResponse(response, popupForm, cancelOrder, popupCard, popupHolder) {
        return new Promise((resolve, reject) => {
            let validateResonseBtn = createValidResponseButton(this.getLangObject('continue'), popupHolder, this.api);

            let responseMsg = buildResponseMessage(response, this.getLangObject('alertBackendError'), this.api);

            popupForm.remove();
            cancelOrder.remove();
            
            appendElementList(popupCard, responseMsg, validateResonseBtn);
            resolve(true);
        });
    }

    async buildMailPopup() {

        let [ popupHolder, popupCard, popupForm, ] = createPopupHolders();
        let [ dataProcessingWrapper, formMailWrapper, marketingWrapper, mailWrapper, ] = createPopupWrappers(this.getLangObject('allowDataProcessing'), this.getLangObject('allowMarketing'));
        let [ cancelOrder, desc ] = createPopupOrderElements(this.api, popupHolder, this.getLangObject('enterEmail'));

        let optionalInfo = createOptionalInfo(this.getLangObject('extraInformation'));
        let label = createPopupLabel('email', 'Email:');
        let email = createEmailInput();

        let countriesDropDown = await createPopupCoutriesDropdown(this.getLangObject('countryInputLabel'));

        appendElementList(mailWrapper, label, email);
        appendElementList(formMailWrapper, mailWrapper, optionalInfo, countriesDropDown, marketingWrapper, dataProcessingWrapper);

        let submit = createPopupFormSubmit(this.getLangObject('submit'));

        return [ popupHolder, popupForm, popupCard, cancelOrder, desc, formMailWrapper, email, optionalInfo, submit ];
    }
    
}
