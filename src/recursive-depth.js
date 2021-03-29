const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {
    if (Array.isArray(arr)) {
      let tmp = 0;
      tmp = Math.max(tmp,...arr.map((a) => this.calculateDepth(a))
      );
      return tmp + 1;
    } 
    else return 0;
  }
};