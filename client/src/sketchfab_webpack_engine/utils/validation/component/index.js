import Component from '../../../component';
import { errorLog } from '../../../logger';

/**
 * Validates the component reference
 * @param {Component} componentRef - a reference to the component class 
 * @returns 
 */
export let validateConfiguratorComponent = (componentRef) => {
    if(!(componentRef instanceof Component)) {
        errorLog(`${componentRef} is not a valid component`);
        return false;
    }
    return true;
};
