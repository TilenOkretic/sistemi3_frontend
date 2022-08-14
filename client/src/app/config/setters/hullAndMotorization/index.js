import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setHullType = (type, api) => {
    setConfigKeyValuePair('hullType', type, api);
};

let setHasElectricPropulsion = (electricPropulsion, api) => {
    setConfigKeyValuePair('electricPropulsion', electricPropulsion, api);
};

let setHasMotorPropulsion = (motorPropulsion, api) => {
    setConfigKeyValuePair('motorPropulsion', motorPropulsion, api);
};

let setHasOutboardMotor = (hasOutboardMotor, api) => {
    setConfigKeyValuePair('outboardMotor', hasOutboardMotor, api);
};

let setHasInboardMotor = (hasInboardMotor, api) => {
    setConfigKeyValuePair('inboardMotor', hasInboardMotor, api);
};

let setMotorThrottle = (count, api) => {
    let tcount = count == 1 ? 'single' : 'dual';
    setThrottleCount(tcount, api);
};

let setThrottleCount = (throttle, api) => {
    setConfigKeyValuePair('throttle', throttle, api);
};

let setOutboardMotorCount = (count, api) => {
    setConfigKeyValuePair('outboard', count, api);
};

let setInboardMotorCount = (count, api) => {
    setConfigKeyValuePair('inboard', count, api);
};

let setElectricInboardEngineCount = (count, api) => {
    setConfigKeyValuePair('electric-inboard', count, api);
};

let setElectricOutboardEngineCount = (count, api) => {
    setConfigKeyValuePair('electric-outboard', count, api);
};

let setMotorization = (motorization, api) => {
    setConfigKeyValuePair('motorization', motorization, api);
}

export {
    setHullType,
    setHasElectricPropulsion,
    setHasMotorPropulsion,
    setHasOutboardMotor,
    setHasInboardMotor,
    setMotorThrottle,
    setThrottleCount,
    setOutboardMotorCount,
    setInboardMotorCount,
    setElectricInboardEngineCount,
    setElectricOutboardEngineCount,
    setMotorization,
};
