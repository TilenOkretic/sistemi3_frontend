let getAllRoofSolutionsButtons = (currentBtnId) => {
    let parent = document.querySelector('#button-holder-roof-solutions');
    return Array.from(parent.children).filter(e => !e.id.includes(currentBtnId)); 
};

export {
    getAllRoofSolutionsButtons
};
