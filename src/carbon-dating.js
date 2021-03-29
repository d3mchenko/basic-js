const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = +sampleActivity;
  if(typeof sampleActivity!=='string' || number == '' || number == ' ' || isNaN(number) || number <=0 || number >=15) return false;
  let res = (Math.log(MODERN_ACTIVITY)-Math.log(number)) * (HALF_LIFE_PERIOD/0.693);
  res = Math.ceil(res);
  return res;
};
