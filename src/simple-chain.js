const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`${String(value)}`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.array.length) {
      this.array.length = 0;
      throw new Error();
    };
      this.array.splice(position - 1, 1);
      return this;
  },
  
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let res = '( ' + this.array.join(' )~~( ') + ' )';
    this.array = [];
    return res;
  }
};

module.exports = chainMaker;
