import { wordsSpin } from '../../languages/animation';
import createLoadingGif from '../../loadingBar';
import { validateString } from '../../utils/validation';
import { validateConfigurator } from '../../utils/validation/configurator';
import { validateDOM } from '../../utils/validation/dom';

export default async (configuratorRef, modelId, holder) => {
    validateConfigurator(configuratorRef);
    validateDOM(holder);
    validateString(modelId);

    await createLoadingGif(configuratorRef.API);
    await wordsSpin(configuratorRef.API);
    holder.remove();

    let apiFrameHolder = document.querySelector('#api-frame-holder');
    validateDOM(apiFrameHolder, 'api-frame-holder');
    apiFrameHolder.classList.replace('d-none', 'd-flex');

    configuratorRef.setCurrentModelId(modelId);
    await configuratorRef.loadModel(modelId);  
};
