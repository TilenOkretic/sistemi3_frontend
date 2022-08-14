export let model21ShowList = (api) => {
    if (!api.isModel21()) {
        return [];
    }
    return [ 'motorDisplacement.inboard.1x' ];
};
