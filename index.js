function createPromise(val) {
  // const promise = new Promise((resolve, reject) => {
  //  resolve(val)
  // })
  const promise = Promise.resolve(val);
  return promise;
}

function createFailedPromise(val) {
  const promise = Promise.reject(new Error('fail'));
  return promise;
}

function waitFor(val) {
  return val.then(Promise.resolve(val*2))
}

function waitForAll() {
  
}

function waitForFirstOne() {
  
}

module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
};
