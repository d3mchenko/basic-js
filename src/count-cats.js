

module.exports = function countCats(matrix) {
  let count = 0;
  for (let subArr of matrix) {
    for (let elem of subArr) {
      if(elem=='^^') {
        count++;
      }
    }
  }
  if(count==0) return 0;
  else return count;
};
