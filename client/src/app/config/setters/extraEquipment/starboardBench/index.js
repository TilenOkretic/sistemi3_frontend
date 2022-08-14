import { popExtraEquipment, pushExtraEquipment } from '..';
import { getHasExtraEquipment } from '../../../getters/extraEquipment';

export let setHasStarboardBench = (flag, api) => {
    flag ? pushExtraEquipment('starboardBench', 'starboardBench', api) : popExtraEquipment('starboardBench', api);
    
    return getHasExtraEquipment('starboardBench','starboardBench', api);
};
