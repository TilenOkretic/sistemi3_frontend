import { getAllCountries, getCountryNameFromCountryCode } from '../../../../countries/countries';
import { addClass, createElement } from '../../../dom';

export let createCountriesDropDown = async (inputLabelText) => {

    let wrapper = createElement('div', 'option-country');
    addClass(wrapper, 'd-flex');
    addClass(wrapper, 'fd-row');
    addClass(wrapper, 'jc-left');
    addClass(wrapper, 'ai-center');
    addClass(wrapper, 'w-100');
    
    let inputLabel = createElement('label', 'option-country-input-label'); 
    inputLabel.textContent = `${inputLabelText}:`;
    addClass(inputLabel, 'mr-1r');
    addClass(inputLabel, 'text-uppercase');

    let input = createElement('input', 'option-country-input');
    input.setAttribute('list', 'countries-datalist');
    input.setAttribute('autocomplete', 'off');
    input.value = await getCountryNameFromCountryCode('si');
    
    let ddm = createElement('datalist', 'countries-datalist');
    
    let validCountries = await getAllCountries();
    validCountries.forEach(element => {
        let opt = document.createElement('option');
        addClass(opt, 'w-100');
        opt.value = element;
        // opt.textContent = element;
        ddm.appendChild(opt);
    });
    
    ddm.addEventListener('change', () => {
        ddm.title = ddm.value;
    });
    
    wrapper.appendChild(inputLabel);
    wrapper.appendChild(input);
    wrapper.appendChild(ddm);
    
    return wrapper;
};
