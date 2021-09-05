/*jshint esversion: 8 */

function isEmpty(checkVariable){    
  if (typeof checkVariable === 'undefined' || checkVariable === null || checkVariable === '' || isNaN(checkVariable) ) {
      // variable is undefined or null
      return true;
  }
  return false;
};

function isNotEmpty( checkVariable ) {
  return !isEmpty( checkVariable );
}


module.exports = [
  isEmpty,
  isNotEmpty
];
