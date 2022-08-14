
/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns an merged array
 */
export let mergeArrays = (arr1, arr2) => {
    
    if(!Array.isArray(arr1)) {
        console.error(arr1, 'is not an array');
        return -1;
    } 
    
    if(!Array.isArray(arr2)) {
        console.error(arr2, 'is not an array');
        return -1;
    }

    Array.prototype.push.apply(arr1, arr2);    
};
