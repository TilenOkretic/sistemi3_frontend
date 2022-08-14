

let addPlatformOption = () => {
    if (!document.getElementById('platform-option-button')) return;
    
    let btn = document.getElementById('platform-option-button').parentElement;
    if (btn) {
        btn.style.display = '';
    }
};

let removePlatformOption = () => {
    if (!document.getElementById('platform-option-button')) return;
    let btn = document.getElementById('platform-option-button').parentElement;
    if (btn) {
        btn.style.display = 'none';
    }
};

export {
    addPlatformOption,
    removePlatformOption,    
};
