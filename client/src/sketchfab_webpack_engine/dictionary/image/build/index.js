
/**
 * Returns an object holding imported imaga data
 * Format: directory/image
 * @param {String} rootPath - path to the 'assets' directory
 * @param {array} context 
 * @returns JSON object
 */
export let buildImageDictionary = (context) => {
    let imgDictionary = {};

    context.keys().forEach(imagePath => {
        let [ folderRoot, imageName ]= imagePath.split('/');
        let key = imageName.split('.')[0];
        imgDictionary[key] = context(imagePath);
    });

    return imgDictionary;
};
