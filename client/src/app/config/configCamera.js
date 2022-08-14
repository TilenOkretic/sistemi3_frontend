let CAMERA_RESET_CONFIGURATOR = (api) => api.isModelCabinEvo() ? {
    position: [ 5.906, -5.564, 3.129 ],
    target: [ 0, 0.458, 0.925 ]
} : api.isModel21() ? {
    position: [ 3.432480885400776, -4.883995361240244, 3.828526930395816 ],
    target: [ -0.395279405300695, 0.07093211275859625, 1.4514670238166603 ]
} : {
    position: [ 7.914, -13.441, 4.309 ],
    target: [ -0.624, -4.736, 1.124 ]
};

let CAMERA_RESET_CONFIGURATOR_MOBILE = (api) => api.isModel21()? {
    position: [ 5.206219220886378, -0.3910901678130975, 1.8899243319156749 ],
    target: [ -0.3946947165077331, 0.07030709262068786, 1.4512921883011642 ]
} :api.isModelCabinEvo() ? {
    position: [ 7, 0, 0 ],
    target: [ 0, 0.5, 1 ]
} : {
    position: [ 8.537752373378385, -5.008596609856682, 2.3968034188442275 ],
    target: [ 0.00402485887696769, -4.494194821654295, 1.8013397673863663 ]
};

let CAMERA_FOR_ELEMENT = (api, element) => {
    switch (element) {
        case 'bowCushioning':
            return {
                position: [
                    api.isModelCabinEvo() ? -3.448 : api.isModelCabin() ? -2.457 : 0,
                    api.isModelCabinEvo() ? -6.255 : api.isModelCabin() ? -13.109 : 0,
                    api.isModelCabinEvo() ? 5.29 : api.isModelCabin() ? 5.361 : 0
                ],
                target: [
                    api.isModelCabinEvo() ? 0 : 0,
                    api.isModelCabinEvo() ? 0.458 : -4.497,
                    api.isModelCabinEvo() ? 0.925 : 1.800
                ]
            };
        case 'kitchenBench':
            return {
                position: [
                    api.isModelCabinEvo() ? -0.009 : api.isModelCabin() ? -0.029 : api.isModel21() ? 0.842641006043038 : 0,
                    api.isModelCabinEvo() ? -0.672 : api.isModelCabin() ? -5.683 : api.isModel21() ? 0.10938534560535935 : 0,
                    api.isModelCabinEvo() ? 1.734 : api.isModelCabin() ? 2.521 : api.isModel21() ? 2.0843856230511792 : 0
                ],
                target: [
                    api.isModelCabinEvo() ? -0.001 : api.isModelCabin() ? 0.006 : api.isModel21() ? -0.3948130381866612 : 0,
                    api.isModelCabinEvo() ? 0.459 : api.isModelCabin() ? -4.495 : api.isModel21() ? 0.07075829935383955 : 0,
                    api.isModelCabinEvo() ? 0.925 : api.isModelCabin() ? 1.800 : api.isModel21() ? 1.4522262762742417 : 0
                ]
            };
        case 'sunbedTent':
            return {
                position: [
                    api.isModelCabinEvo() ? 1.4770340520103047 : 1.187,
                    api.isModelCabinEvo() ? 6.392785297377184 : 1.288,
                    api.isModelCabinEvo() ? 4.1841186004814555 : 4.498
                ],
                target: [
                    api.isModelCabinEvo() ? 0 : 0,
                    api.isModelCabinEvo() ? 0.45799999999999996 : -4.497,
                    api.isModelCabinEvo() ? 0.925 : 1.8
                ]
            };
        case 'platform':
            return {
                position: [
                    2.6200011587936847,
                    8.75296958265396,
                    1.5012026993735674
                ],
                target: [
                    2.919812099906404e-17,
                    0.4579999999999999,
                    0.925
                ]
            };
        case 'table':
            return {
                position: [
                    api.isModelCabinEvo() ? -0.009 : api.isModelCabin() ? -0.029 : api.isModel21() ? -0.42454716588422536 : 0,
                    api.isModelCabinEvo() ? -0.672 : api.isModelCabin() ? -5.683 : api.isModel21() ? -2.35800694817969 : 0,
                    api.isModelCabinEvo() ? 1.734 : api.isModelCabin() ? 2.521 : api.isModel21() ? 2.243297092885225 : 0
                ],
                target: [
                    api.isModelCabinEvo() ? -0.001 : api.isModelCabin() ? 0.006 : api.isModel21() ? -0.3949515094166479 : 0,
                    api.isModelCabinEvo() ? 0.459 : api.isModelCabin() ? -4.495 : api.isModel21() ? 0.07027741691850367 : 0,
                    api.isModelCabinEvo() ? 0.925 : api.isModelCabin() ? 1.800 : api.isModel21() ? 1.451734004681486 : 0
                ]
            };
    }
};

let GET_CAMERA_FROM_POSITION = (api, position) => {
    switch(position) {
        case 'frontSide':
            return api.isModelCabinEvo() ? {
                position: [ 3.5281202501566775, -6.520960662526329, 2.576317060135165 ],
                target: [ -0.0009999999999999638, 0.4589999999999999, 0.925 ]
            } : api.isModelCabin() ? {
                position: [ 4.313737818616715, -12.8269979022641, 4.0913208325251595 ],
                target: [ -0.6239999999999993, -4.736, 1.1240000000000008 ]
            } : api.isModel21() ? {
                position: [ 3.930248969711026, -4.493737722485503, 3.755173274037557 ],
                target: [ -0.3952794053006949, 0.07093211275859619, 1.4514670238166603 ]
            } : -1;
        case 'backTop': return api.isModelCabinEvo() ? {
            position: [ 3.1720536286471845, 7.305858355811183, 3.5619774266691975 ],
            target: [ -0.0009999999999998894, 0.45899999999999985, 0.925 ]
        } : api.isModelCabin() ? {
            position: [ 3.285307719300998, 3.3861568819539265, 5.377815105848506 ],
            target: [ -0.6239999999999981, -4.735999999999999, 1.124000000000002 ]
        } : api.isModel21() ? {
            position: [ 2.8734433758253592, 5.601481061115593, 3.344070686790517 ], 
            target: [ -0.3952794053006954, 0.07093211275859634, 1.45146702381666 ]
        } : -1; 
        case 'front': 
            return api.isModelCabinEvo() ? {
                position: [ -3.3911877755257938, -6.447045814744482, 3.096300687353007 ],
                target: [ -0.0010000000000000497, 0.459, 0.925 ]
            } : api.isModelCabin() ? {
                position: [ -0.4168246612346036, -12.322797131175102, 4.119023846963193 ],
                target: [ -0.6240000000000003, -4.736, 1.1239999999999997 ]
            } : api.isModel21() ? {
                position: [ -0.7168756271282462, -6.180152457915656, 3.833480137867507 ],
                target: [ -0.3952794053006948, 0.0709321127585961, 1.4514670238166603 ]
            } : -1;
        case 'back': 
            return api.isModelCabinEvo() ? {
                position: [ 4.643934643868568, 6.77761058966213, 2.4745583222238183 ],
                target: [ -0.0010000000000000497, 0.459, 0.925 ]
            } : api.isModelCabin() ? {
                position: [ 3.247731845906892, 3.0904826243086516, 3.355804168209633 ],
                target: [ -0.6240000000000003, -4.736, 1.1239999999999997 ]
            } : api.isModel21() ? {
                position: [ 1.6643089407575888, 6.436646086299104, 1.750215022935778 ],
                target: [ -0.3952794053006948, 0.0709321127585961, 1.4514670238166603 ]
            } : -1;
        case 'side':
            return api.isModelCabinEvo() ? {
                position: [ 7.077994045270524, -0.9313732961095766, 4.3682679285910595 ], 
                target: [ -0.0010000000000000497, 0.459, 0.925 ]
            } : api.isModelCabin() ? {
                position: [ 6.38823886818675, -7.646106913616191, 4.1127060714114645 ],
                target: [ -0.6240000000000003, -4.736, 1.1239999999999997 ]
            } : api.isModel21() ? {
                position: [ 4.676206103124229, -3.643611914862288, 3.7613731517421365 ],
                target: [ -0.3952794053006948, 0.0709321127585961, 1.4514670238166603 ]
            } : -1;
    }
    return -1;
};

export {
    CAMERA_FOR_ELEMENT,
    CAMERA_RESET_CONFIGURATOR,
    CAMERA_RESET_CONFIGURATOR_MOBILE,
    GET_CAMERA_FROM_POSITION,
};
