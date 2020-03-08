module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depthMax = 1;
        arr.forEach( item => {
            if (Array.isArray(item)) {
                let depth = this.calculateDepth(item) + 1;
                if (depth > depthMax) {
                    depthMax = depth;
                }
            }
        });
        return depthMax;
}
};