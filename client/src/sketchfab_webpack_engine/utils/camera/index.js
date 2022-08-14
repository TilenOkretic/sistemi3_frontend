import { errorLog } from '../../logger';
import { getVectorFromPositionJSON } from '../json';
import { dist3Dvec } from '../mathUtil';

/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @param {String} element - camera look element
 * @param {Any} flag - just something used for checking if camera has acctually moved
 * @returns promise resolve
 */
export let moveCamera = (api, position, target, flag) => new Promise((resolve, reject) => {
    api.setCameraLookAt(position, target, 1.25, (err) => {
        if(err) {
            errorLog('ERROR with camera movement');
            return;
        }
 
        // TODO: look into this to incorporate also the target position vector !!
        // TODO: camera movement when doing color selection should have a shorter delay
        api.getCameraLookAt((err, camera) => {
            let v1 = getVectorFromPositionJSON(position);
            let v2 = getVectorFromPositionJSON(camera.position);
            let dist = Math.floor(dist3Dvec(v1, v2)) * process.env.CAMERA_DELAY_MULTIPLIER;
            setTimeout(() => resolve(true), dist);
        });
    });
});
