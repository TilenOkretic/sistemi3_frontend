let getRegexForRoofLogosForModel = (api) => api.isModel21() ? '' : `logos.roof.${api.getBoatModel()}`;
let getRegexForHullLogos = () => 'logos.';
let getRegexForHullLogosForModel = (api) => api.isModel21() ? '' : `logos.${api.getBoatModel()}`;

export {
    getRegexForRoofLogosForModel,
    getRegexForHullLogos,
    getRegexForHullLogosForModel,
};
