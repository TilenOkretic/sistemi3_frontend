import { createHTMLButton } from '../../../../../../../sketchfab_webpack_engine/utils/buttons';
import { loadLoungeLayoutDeckTable } from '../../loungeLayout';
import { loadNormalDeckTable } from '../../teakTable';

let tableConfigurationFuntionMap = {
    'normal': (api) => loadNormalDeckTable(api),
    'loungeLayout': (api) => loadLoungeLayoutDeckTable(api), 
};

export let createTableConfigurationListItem = (id, api) => {
    let btn = createHTMLButton(`extra-tableconfiguration-${id}`, `extra-tableconfiguration-${id}`, api);
    btn.addEventListener('click', () => {
        tableConfigurationFuntionMap[id](api);
        // setImageOfHTMLButton('extra-siderails-img', `extra-siderail-${id}`, api);
    });
    return btn;
};
