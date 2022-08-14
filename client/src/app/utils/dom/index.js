import { removeDom } from '../../../sketchfab_webpack_engine/utils/dom';

/**
 * 
 * @returns JSON object of all motorization buttons
 */
let getAllMotorButtonsDOMs = () => {
    let inboardMotor1x = document.querySelector('#motor-planing-1-inboard-btn');
    let inboardMotor2x = document.querySelector('#motor-planing-2-inboard-btn');
    let outboardMotor1x = document.querySelector('#motor-planing-1-outboard-btn');
    let outboardMotor2x = document.querySelector('#motor-planing-2-outboard-btn');
    let displacementInboardMotor1x = document.querySelector('#motor-displacement-1-inboard-btn');
    let displacementInboardMotor2x = document.querySelector('#motor-displacement-2-inboard-btn');
    let electricInboardMotor1x = document.querySelector('#motor-1-electric-inboard-btn');
    let electricOutboardMotor1x = document.querySelector('#motor-1-electric-outboard-btn');
    let motorOutboardMotor1x = document.querySelector('#motor-1-motor-outboard-btn');

    return {
        inboardMotor1x,
        inboardMotor2x,
        outboardMotor1x,
        outboardMotor2x,
        displacementInboardMotor1x,
        displacementInboardMotor2x,
        electricInboardMotor1x,
        electricOutboardMotor1x,
        motorOutboardMotor1x,
    };
};

/**
 * Removes all motorization options
 */
let removeMotorOptions = () => {
    for(let key in getAllMotorButtonsDOMs()) {
        let element = getAllMotorButtonsDOMs()[key];
        element ? removeDom(element) : '';        
    }
};

export {
    getAllMotorButtonsDOMs,
    removeMotorOptions,
};
