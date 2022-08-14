import { addClass } from '../../dom';
import { createLabel } from '../../dom/label';

export let createPopupLabel = (forr, text) => {
    let out = createLabel(forr, text);
    addClass(out, 'mx-1');
    return out;
};
