import { developmentLog } from '../../../logger';
import { validateAPI } from '../../../utils/validation/api';

/**
 * Builds a dictioanry of all blend components so that then can be referenced later
 * @param {3D element array} graph 
 * @param {Sketchfab API object} api - JSON object holding all application data  
 * @returns promise resolve
 */
export let buildDictionary = async(graph, api) => new Promise((resolve) => {
    if(!validateAPI(api)) return;

    developmentLog('Started building model element dicitironary.');
    let dictioanry = {};
    
    let elements = graph.children[0].children;
    elements.forEach(e => {
        if(!e.name) return;
        let n = e.name.split('_')[0];
        dictioanry[n] = e;
    });
    
    developmentLog('Storing model element dictionary into the API object');
    api.componentDictionary = dictioanry;
    return resolve();
});
