// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        return matrix.map((arr, index) => {
            return index % 2 === 0 ? arr : arr.reverse()
        }).flat();
    }
    return [];
}
