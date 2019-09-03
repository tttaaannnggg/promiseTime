const {timeResolution} = require('./timeResolution.js');
//takes in a function
//returns a version of the function that returns a promise
//promise resolves to {val: <value returned>, time: <int of elapsed in ms>}
module.exports.addTimer = function(fn) {
  return function(...args) {
    const now = Date.now();
    return timeResolution(fn(...args), now);
  };
}
