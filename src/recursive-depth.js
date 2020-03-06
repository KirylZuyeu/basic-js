module.exports = class DepthCalculator {
    calculateDepth(arr) {
        depthMax = 1;
        arr.forEach( item => {
            if (Array.isArray(item)) {
                depth = calculateDepth(item) + 1;
                if (depth > depthMax) {
                    depthMax = depth;
                }
            }
        });
        return depthMax;
};