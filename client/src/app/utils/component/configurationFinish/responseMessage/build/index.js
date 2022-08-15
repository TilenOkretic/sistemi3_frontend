import { addClass } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { getOrderId } from '../../../../../config/getters/configurationFinish';
import { setOrderId } from '../../../../../config/setters/configurationFinish';

export default (response, cardText, api) => {
    let rm = document.createElement('p');
    addClass(rm, 'text-first-letter-capital');
    if (response) {
        let { msg } = response;
        if (msg) {
            rm.id = 'rsp-msg';

            let [ message, orderID ] = msg.split(':');
            orderID = orderID.replace(' ', '');

            if (orderID) {
                setOrderId(orderID, api);
            }

            let bold = document.createElement('b');
            bold.textContent = orderID;
            addClass(bold, 'fw-600');
            addClass(bold, 'tt-none');

            rm.textContent = message + ':';
            rm.appendChild(bold);
        } else if (response.status != '200') {
            let { status, message, stack } = response;
            rm.innerHTML = `!ERROR ${status}!<br>${message}<br> STACK: ${stack}`;
        }
    } else {
        rm.textContent = cardText;
    }

    return rm;
};
