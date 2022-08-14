import { moveCamera } from '../../../sketchfab_webpack_engine/utils/camera';
import { CAMERA_RESET_CONFIGURATOR_MOBILE, GET_CAMERA_FROM_POSITION } from '../../config/configCamera';

// DEPRICATED
/**
 * 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 * @param {Float} position 
 * @param {Float} target 
 * @returns promise resolve
 */
let moveCameraToBoatElement = async (element = '', api) => {
    if(!element || element == '') {
        await moveCamera(api, GET_CAMERA_FROM_POSITION(api, 'frontSide').position, GET_CAMERA_FROM_POSITION(api, 'frontSide').target);
    } else if (element == 'mobile') {
        await moveCamera(api, CAMERA_RESET_CONFIGURATOR_MOBILE(api).position, CAMERA_RESET_CONFIGURATOR_MOBILE(api).target, element);
    }else {
        await moveCamera(api, GET_CAMERA_FROM_POSITION(api, element).position, GET_CAMERA_FROM_POSITION(api, element).target, element);
    }
};

export {
    moveCameraToBoatElement
};
