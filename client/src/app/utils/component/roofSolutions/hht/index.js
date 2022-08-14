import { showElement } from '../../../../../sketchfab_webpack_engine/dictionary/model';
import { addClass, removeClass } from '../../../../../sketchfab_webpack_engine/utils/dom';
import { clearSelection, showSelection } from '../../../../../sketchfab_webpack_engine/utils/selection';
import { setRoofColor, setRoofType } from '../../../../config/setters/roofSelection';
import { getRegexForRoofColors } from '../../../../regexLib/roofSolutions';
import { hideAllRoof } from '../../../dictionary/boatDictionaryUtil';
import { getAllRoofSolutionsButtons } from '../dom';
import { getRoofColorElementId, getRoofList } from '../roofUtil';

export let loadHHTRoof = (api) => {
    document.querySelector('#extra-snbd-tent-btn') ? removeClass(document.querySelector('#extra-snbd-tent-btn'), 'd-none') : '';

    for (let i = 0; i < getRoofList('hht').childElementCount; i++) {
        clearSelection(getRoofList('hht').children[i].id);
    }

    

    getRoofList('hht') ? removeClass(getRoofList('hht'), 'd-none') : '';
    getRoofList('ttop') ? addClass(getRoofList('ttop'), 'd-none') : '';

    setRoofType('hht', api);
    setRoofColor('darkAntracite', api);

    hideAllRoof(api);
    showElement(getRegexForRoofColors(api), api);
    
    showSelection(getRoofColorElementId('hht', api));
    clearSelection(getAllRoofSolutionsButtons('hht'));
};
