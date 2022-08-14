import { getRoofColor } from '../../../config/getters/roofSelection';

let getRoofList = (type) => document.querySelector(`#roof-list-${type}`);

let getRoofColorElementId = (type, api) => `color-roof-${type}-${getRoofColor(api)}`;

export {
    getRoofList,
    getRoofColorElementId,
};
