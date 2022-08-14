import { getCancelButtonSVG } from '../../../../sketchfab_webpack_engine/utils/assets/svg/cancelButton';
import { createOrderCancelButton } from '../../component/configurationFinish/order/cancel';
import { createOrderDescription } from '../../component/configurationFinish/order/description';

export let createPopupOrderElements = (api, popupHolder, enterEmailText) => {
    let cancelOrder = createOrderCancelButton(api, popupHolder, getCancelButtonSVG());
    let desc = createOrderDescription(enterEmailText);
    return [ cancelOrder, desc ];
};
