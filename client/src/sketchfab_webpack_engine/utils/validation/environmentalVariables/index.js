import { developmentLog, errorLog } from '../../../logger';

export default () => {
    if(process.env.BACKEND_URL_DEVELOPMENT === undefined || process.env.BACKEND_URL_DEVELOPMENT === null){
        errorLog('BACKEND_URL_DEVELOPMENT variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.BACKEND_URL_PRODUCTION === undefined || process.env.BACKEND_URL_PRODUCTION === null){
        errorLog('BACKEND_URL_PRODUCTION variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.ANIMATION_SPEED === undefined || process.env.ANIMATION_SPEED === null){
        errorLog('ANIMATION_SPEED variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.CAMERA_DELAY_MULTIPLIER === undefined || process.env.CAMERA_DELAY_MULTIPLIER === null){
        errorLog('CAMERA_DELAY_MULTIPLIER variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.ASSETS_PATH === undefined || process.env.ASSETS_PATH === null){
        errorLog('ASSETS_PATH variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.APP_NAME === undefined || process.env.APP_NAME === null){
        errorLog('APP_NAME variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.LOADING_GIF_PATH === undefined || process.env.LOADING_GIF_PATH === null){
        errorLog('LOADING_GIF_PATH variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    if(process.env.LANG_PATH === undefined || process.env.LANG_PATH === null){
        errorLog('LANG_PATH variable is not defined. Please assign it a value in the \'.env\' file');
        return;
    }

    developmentLog('All environmental variables present');
};
