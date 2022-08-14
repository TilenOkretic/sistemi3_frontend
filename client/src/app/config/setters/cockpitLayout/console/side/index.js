import { setHasGalleyKitchen, setHasRearBench } from '../../../extraEquipment';

export let setConsoleSideLayoutConfigs = (api) => {
    setHasGalleyKitchen(false, api);
    setHasRearBench(false, api);
    
    // clearExtraOption('gak-21');
    // clearExtraOption('ben-21');   
    // clearExtraEquipmentSelections([ 'gak-21', 'ben-21' ]);
};
