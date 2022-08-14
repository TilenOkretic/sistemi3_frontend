import { Application } from '../../../application';
import { errorLog } from '../../../logger';

/**
 * Validates reference to the configurator
 * @param {Application} configuratorRef 
 * @returns boolean
 */
export let validateConfigurator = (configuratorRef) => {
    if(!(configuratorRef instanceof Application)) {
        errorLog(`${configuratorRef} is not a valid configurator reference`);
        return false;
    }
    return true;
};
