// function createPromise(val) {
//   return Promise.resolve(val);
// }
const createPromise = (value) => Promise.resolve(value);

// function createFailedPromise(val) {
//   const promise = Promise.reject(new Error('fail'));
//   return promise;
// }
const createFailedPromise = () => Promise.reject(new Error('fail'));

// function waitFor(promise) {
//   return promise.then((val) => val * 2);
// }
const waitFor = (promise) => promise.then((value) => value * 2);

// function waitForAll(promises) {
//   return Promise.all(promises).then((value) => value.map((el) => el * 3));
// }
const waitForAll = (promises) => Promise.all(promises).then((value) => value.map((el) => el * 3));

// function waitForFirstOne(promises) {
//   return Promise.race(promises).then((value) => value * 4);
// }
const waitForFirstOne = (promises) => Promise.race(promises).then((value) => value * 4);

module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
};
