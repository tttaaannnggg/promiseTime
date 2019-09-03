const {isPromise} = require('./isPromise.js');
//invokes and times functions (works for both promises and sync functions)
//returns promise that resolves to {val: <returned val>, time: <int, elapsed time>}
module.exports.timeResolution = function (returnedVal, start = Date.now()) {
  let result;
  if (!isPromise(returnedVal)) {
    result = new Promise((resolve, reject) => {
      resolve(returnedVal);
    });
  } else {
    result = returnedVal;
  }
  return result.then(val => {
    return {
      val,
      time: Date.now() - start,
    };
  });
}
