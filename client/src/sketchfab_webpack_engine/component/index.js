/* eslint-disable unused-imports/no-unused-vars */

import { getTranslation } from '../languages/getters';
import { developmentLog, errorLog } from '../logger';
import { createDockElement } from '../utils/dock';
import { createDockItemContent } from '../utils/dock/item';
import { createDockTitleButton } from '../utils/dock/title';
import { createSubElementsHolder } from '../utils/holders/subElements';
import { validateModelId } from '../utils/validation/model';

export default class Component {
    /**
     * 
     * @param {string} id - id of the component 
     * @param {Sketchfab API object} api - JSON object holding all application data
     */
    constructor(id, api) {

        this.name = getTranslation(api, id);
        this.id = id;

        this.translation;
        this.api = api;
        this.subElements = createSubElementsHolder(id);

        this.dockElement = createDockElement();

        this.title = createDockTitleButton(api, id, this.dockElement);

        this.dockItem = createDockItemContent(this.subElements);

        this.setupComponentMap = {};

        this.dockElement.appendChild(this.title);
        this.dockElement.appendChild(this.dockItem);

        document.querySelector('#dock-wrapper').appendChild(this.dockElement);
    }

    addSetupComponentForModel(modelId, setupComponentFunction) {
        validateModelId(modelId, this.api);        
        this.setupComponentMap[modelId] = (api) => setupComponentFunction(this, api);
    }

    /**
     * This functions enables user interaction with the component DOM
     */
    enable() {
        this.title.disabled = false;
        this.title.classList.replace('disabled', 'button-hover');
    }

    /**
     * This function disables user interaction with the component DOM
     */
    disable() {
        this.title.disabled = true;
        this.title.classList.replace('button-hover', 'disabled');
    }

    /**
     * Appends a child dom element to the main component DOM
     * @param {dom element} btn - dom element that is added as a child of the main component element 
     */
    addSubElement(btn) {
        if (btn) {
            if (btn instanceof Element){
                this.subElements.appendChild(btn);
            } else {
                developmentLog(`${btn} is not a DOM Element`);
            }
        }
    }

    addSubElements(... elmList) {
        elmList.forEach(e => this.addSubElement(e));
    }

    async setupComponent(api) {
        if(!Object.prototype.hasOwnProperty.call(this.setupComponentMap, api.currentModelId)) {
            errorLog(`A ${this.getComponentName()} component for ${api.currentModelId} does not exist`);
            return;
        }
        this.setupComponentMap[api.currentModelId](api);
    }

    /**
     * Returns the compnent name
     * @returns string
     */
    getComponentName() {
        return this.name;
    }

    /**
     * This function handles custom language updates
     * @param {Sketchfab API object} api - JSON object holding all application data
     */
    customLangUpdate(api) {

    }

    /**
     * Updates the language of the component and all of it's sub elements  
     * @param {Sketchfab API object} api - JSON object holding all application data
     */
    updateLang(api) {
        this.title.textContent = getTranslation(this.api, this.id);
        let subElements = this.subElements.children;
        for (let node of subElements) {
            if (node.nodeName == 'UL') {
                let listNodes = node.children;
                for (let listNode of listNodes) {
                    if(listNode.tagName.toLocaleLowerCase() === 'button') {
                        let id = listNode.id;
                        listNode.children[1].textContent = getTranslation(this.api, id) ? getTranslation(this.api, id) : '';
                        !getTranslation(this.api, id) ? listNode.remove() : '';
                        !getTranslation(this.api, id) ? errorLog(`EROOR: VLAUE NOT IN LANG FILE FOR LANG ${this.api.TRANSLATOR['lang']}`) : '';
                    } else {
                        let id = listNode.id.split('-')[listNode.id.split('-').length - 1];
                        listNode.children[0].children[1].textContent = getTranslation(this.api, id) ? getTranslation(this.api, id) : '';
                        !getTranslation(this.api, id) ? listNode.remove() : '';
                        !getTranslation(this.api, id) ? errorLog(`EROOR: VLAUE NOT IN LANG FILE FOR LANG ${this.api.TRANSLATOR['lang']}`) : '';
                    }
                }
            } else {
                if (node.children.length > 0) {
                    node.children[1] ? node.children[1].textContent = getTranslation(this.api, node.id) ? getTranslation(this.api, node.id) : '' : node.children[0].textContent = getTranslation(this.api, node.id) ? getTranslation(this.api, node.id) : '';
                }
            }
        }

        this.customLangUpdate(api);
    }
}
