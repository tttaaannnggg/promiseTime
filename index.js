const fetch = require('node-fetch');
export function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}

//invokes and times functions (works for both promises and sync functions)
export function timePromOrVal(returnedVal, start = Date.now()) {
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

//bringing it all together
// returns a promise that will resolve with its val and elapsed time

export function timeIt(fn) {
  return function(...args) {
    const now = Date.now();
    return timePromOrVal(fn(...args), now);
  };
}
