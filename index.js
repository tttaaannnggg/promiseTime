const fetch = require('node-fetch');
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}

function timePropmise(prom) {
  const start = Date.now();
  return prom.then(val => {
    const time = Date.now() - start;
  });
}

function wrapFunction(fn) {
  const prom = fn();
  if (isPromise(prom)) {
    return timePromise(prom);
  }
}

//invokes and times functions (works for both promises and sync functions)
function timePromOrVal(fn) {
  const start = Date.now();
  const prom = fn();
  let result;
  if (!isPromise(prom)) {
    result = new Promise((resolve, reject) => {
      resolve(prom);
    });
  } else {
    result = prom;
  }
  return result.then(val => {
    return {
      val,
      time: Date.now() - start,
    };
  });
}

// testing promise and non-promise vals

const fetchThing = () => {
  return fetch('https://api.github.com/users/github');
};

const syncOp = () => 5;

timePromOrVal(fetchThing).then(data => {
  console.log(data);
});

timePromOrVal(syncOp).then(data => {
  console.log(data);
});
