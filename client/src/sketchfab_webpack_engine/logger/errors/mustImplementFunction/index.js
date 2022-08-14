import { errorLog } from '../..';

export default (functionName='')=>{
    errorLog(`Function ${functionName != '' ? `"${functionName}"` : ''} needs to be implemented`);
};
