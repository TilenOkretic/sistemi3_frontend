/**
 * 
 * @returns dock-wripper with no elements inside
 */
let clearDockWrapper = () => {
    let wrapper = document.querySelector('#dock-wrapper');

    for (let i = wrapper.childElementCount - 1; i >= 0; i--) {
        wrapper.children[i].remove();
    }

    return wrapper;
};

export {
    clearDockWrapper,
};
