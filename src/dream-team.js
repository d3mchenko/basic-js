const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(Array.isArray(members)) {
  let array = [];
  array = members.filter(elem => typeof(elem)=='string');
  if(array.length !== 0) {
  let team=array.map(elem => elem.trim()[0].toUpperCase());
  team = team.sort().join('');
  return team;
} else return false ;
} else return false;
}

