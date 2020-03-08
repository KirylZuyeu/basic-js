module.exports = function countCats(matrix) {
    let arrOne = [];
    return arrOne.concat(...matrix).filter(item => (item === '^^')).length;
};
