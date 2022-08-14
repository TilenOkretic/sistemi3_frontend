let getEnviromentLevel = () => process.env.NODE_ENV.toLocaleUpperCase();

let isDevelopmentEnviroment = () => process.env.NODE_ENV.toLocaleLowerCase() == 'development';

let isProductionEnviroment = () => process.env.NODE_ENV.toLocaleLowerCase() == 'production';

let log = (text) => {
    console.log(`%c${text}`);
};

let developmentLog = (message) => {
    if(isDevelopmentEnviroment()) {
        console.warn(`[ ${process.env.APP_NAME} ]: ${message}`);
    }
};

let successLog = (message) => {
    console.log(`[ ${process.env.APP_NAME} ]: ${message}`);
};

let errorLog = (message) => {
    console.error(`[ ${process.env.APP_NAME} ]: ${message}`);
    alert(`[ ${process.env.APP_NAME} ]: ${message}`);
    throw new Error(`[ ${process.env.APP_NAME} ]: ${message}`);
};

export {
    getEnviromentLevel,
    isDevelopmentEnviroment,
    isProductionEnviroment,
    log,
    developmentLog,
    successLog,
    errorLog,
};
