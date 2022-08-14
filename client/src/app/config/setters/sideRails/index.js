import { pushExtraEquipment } from '../extraEquipment';

let setSideRailType = (type, api) => {
    pushExtraEquipment('sideRailsConfiguration', type, api);
};

export {
    setSideRailType,
};
