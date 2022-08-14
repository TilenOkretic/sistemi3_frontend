/**
 * 
 * @param {DOMObject} parameter - reference to thee DOM object 
 * @returns String - content of the paragraph
 */
let getListItemParagraphContent = (api, { name }) => getTranslation(api, name.split('CX-')[1]);

export {
    getListItemParagraphContent,
};
