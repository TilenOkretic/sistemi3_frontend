import { hideLoading, showLoading } from '../../loadingUtil';
import { createCountriesDropDown } from '../form/countriesDropdown';

let createPopupCoutriesDropdown = async(countryInputLabel) => {
    showLoading();
    let countriesDropDown = await createCountriesDropDown(countryInputLabel);
    hideLoading();
    return countriesDropDown;
};

export {
    createPopupCoutriesDropdown,
};
