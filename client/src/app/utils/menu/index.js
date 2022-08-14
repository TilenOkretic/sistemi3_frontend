import { addClass, removeClass } from '../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection, showSelection } from '../../../sketchfab_webpack_engine/utils/selection';
import { getColorListId } from '../component/colorSelection/colorList';

let openColorMenu = (shipPart) => {

    let colorListIndex = getColorListId(shipPart);

    document.getElementById(colorListIndex).childNodes.forEach(element => {
        let shipPartId = shipPart == 'upper' ? 'upr-btn' : shipPart == 'full' ? 'fll-btn' : 'lwr-btn';
        clearSelection('lwr-btn');
        clearSelection('upr-btn');
        clearSelection('fll-btn');
        showSelection(document.querySelector(`#${shipPartId}`));

        let lowerUpperOpposite = shipPart == 'lower' ? 'upper' : 'lower';
        let lowerFullOppoiste = shipPart == 'lower' ? 'full' : 'lower';
        let upperFullOpposite = shipPart == 'upper' ? 'full' : 'upper';

        addClass(document.getElementById(getColorListId(lowerUpperOpposite)), 'd-none');
        addClass(document.getElementById(getColorListId(lowerFullOppoiste)), 'd-none');
        addClass(document.getElementById(getColorListId(upperFullOpposite)), 'd-none');

        removeClass(document.getElementById(colorListIndex), 'd-none');

        if (element.className == 'color-item ' + shipPart) {
            removeClass(element, 'd-none');
            document.getElementById('clear-btn').style.display = 'inherit';
        }
    });
};



export {
    openColorMenu,
};
