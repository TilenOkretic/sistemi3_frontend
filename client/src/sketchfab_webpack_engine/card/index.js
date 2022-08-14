/* eslint-disable unused-imports/no-unused-vars */
import mustImplementFunction from '../logger/errors/mustImplementFunction';
import { createCardLoadHolder } from '../utils/holders/card';
import { createImageHolder } from '../utils/holders/image';
import { validateConfigurator } from '../utils/validation/configurator';
import { validateDOM } from '../utils/validation/dom';
import loadModel from './loadModel';

export default class Card {
    constructor(modelId, configuratorRef) {
        validateConfigurator(configuratorRef);
        this.modelId = modelId;
        
        const HOLDER = document.querySelector('#model-selection-holder');
        validateDOM(HOLDER, 'model-selection-holder');
        let cardHolder = createCardLoadHolder(`card-load-${modelId}`, `Load boat model ${modelId}`);
        validateDOM(cardHolder, `card-load-${modelId}`);

        let cardImg = createImageHolder(modelId, `model${modelId}`, configuratorRef.API);

        cardHolder.appendChild(cardImg);

        cardHolder.addEventListener('click', async () => await loadModel(configuratorRef, modelId, HOLDER));

        HOLDER.appendChild(cardHolder);
    }

    setModelConfiguration(api) {
        mustImplementFunction('setModelConfiguration');
    }

    loadDefaultConfiguration(api) {
        mustImplementFunction('loadDefaultConfiguration');
    }
}
