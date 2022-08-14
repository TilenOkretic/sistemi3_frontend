
let dist3Dvec = (v1, v2) => {
    let xDiff = (v2.x - v1.x) * (v2.x - v1.x);
    let yDiff = (v2.y - v1.y) * (v2.y - v1.y);
    let zDiff = (v2.z - v1.z) * (v2.z - v1.z);
    return Math.sqrt(xDiff + yDiff + zDiff);
};

export {
    dist3Dvec
};
