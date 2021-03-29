const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw "Error";
  let res = [];
  if(arr.length==0) return arr;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i !== arr.length - 1) {
          i++;
        }
        break;
      case '--discard-prev':
        if (i > 1 && arr[i-2] !== '--discard-next') {
          res.pop();
        }
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          res.push(arr[i+1])
        }
        break;
      case '--double-prev':
        if (i !== 0 && arr[i-2] !== '--discard-next') {
          res.push(arr[i-1]);
        }
        break;
      default:
        res.push(arr[i]);
  }
}
  return res;
};
