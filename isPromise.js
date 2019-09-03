//checks if value is a promise or not (or at least .thenable)
module.exports.isPromise = function(value) {
  return Boolean(value && typeof value.then === 'function');
}

