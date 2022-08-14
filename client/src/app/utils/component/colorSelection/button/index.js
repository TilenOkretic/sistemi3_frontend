import { createHTMLButton } from '../../../../../sketchfab_webpack_engine/utils/buttons';
import { openColorMenu } from '../../../menu';

export let createColorPickerButton = async (api, id) => {
    let bFun = {
        'lwr-btn': () => openColorMenu('lower'),
        'upr-btn': () => openColorMenu('upper'),
        'fll-btn': () => openColorMenu('full'),
    };

    let b = createHTMLButton(id, '', api);
    b.addEventListener('click', bFun[id]);
    return b;
};
