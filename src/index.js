module.exports = function towelSort(matrix) {
  if (arguments.length === 0 || matrix.length === 0) {
    return []
  } else {
    const result = matrix.map((subArray, index) => {
      if (index % 2 === 1) {
        return subArray.reverse();
      }
      return subArray;
    })
    var arr = []
    result.join(',').split(",").forEach((item) => {
      arr.push(parseInt(item));
    });
    return arr
  }
}
// console.log(towelSort())