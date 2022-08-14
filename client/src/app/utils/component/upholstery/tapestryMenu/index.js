import { addClass, removeClass } from '../../../../../sketchfab_webpack_engine/utils/dom';

let getOppositeMenuIndex = (menuIndex) => menuIndex == 'outer' ? 'inner' : 'outer';

export let openTapestryMenu = (menuIndex) => {
    let id = `upholstery-tapestry-list-${menuIndex}`;
    removeClass(document.getElementById(id), 'd-none');
    document.getElementById(id).childNodes.forEach(element => {
        let oppositeMenuList = `upholstery-tapestry-list-${getOppositeMenuIndex(menuIndex)}`;

        let e = document.getElementById(oppositeMenuList);
        addClass(e, 'd-none');

        if (element.className == 'color-item ' + menuIndex) {
            removeClass(element, 'd-none');
        }
    });
};
