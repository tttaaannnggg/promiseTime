# What time is it?

It's _promiseTime_!

I created this small library to create a uniform interface to time functions (both promise-based and not). It won't handle callback-based functions unless you promisify them, though. This is achieved in `addTimer`, which wraps functions into promises that return both their value and runtime. `timeResolution` and `isPromise` are extra utilities that are part of `addTimer`, but also may prove useful on their own. This repo includes the following:

- index.js
- addTimer.js
- timeResolution.js
- isPromise.js

## addTimer.js

Takes in a function, returns a version of the function that returns a promise that resolves to an object with a `val` and `time` on it. `time` is the elapsed time in ms from the promise's creation to its resolution. If the function's returned value is not a promise, it will be wrapped in a promise.

input: `<function>`
output: `<promise>`
`output.then(data=>data): { val: <data> time: <time in ms> }`

### Example:

```
const {addTimer} = require('./index.js')
const timedFunction = addtimer(<function>);
timedFunction().then(data=>{
  console.log(data.time);
  return data.val;
})
```

## timeResolution.js

Takes in a promise, and returns a promise that resolves to an object containing both the returned data from the promise and the time elapsed in ms. If the input value is not a promise, it creates a promise that will resolve to the output of the synchronous function. 

input: `<value>`
output: `<promise>`
`output.then(data=>data): {val: <data>, time:<time in ms>}`

### Example:
```
const {timeResolution} = require('./index.js');
timeresolution(<function>()).then(data=>{
  console.log(data.time);
  return data.val;
})
```

## isPromise.js

takes a val, returns `true` if it's a promise (or at least has a `.then`), `false` if it doesn't.

input: `<value>`
output: `<boolean>`

### Example:
```
const {isPromise} = require('./isPromise.js');
isPromise(5); //false
```








