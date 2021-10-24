// Before `async/await`, asynchronous code was handled using Promises.

// A `Promise` is an object with a delayed completion at some
// indeterminate time in the future.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Hard fail");
  }, 1000);
});

myPromise
  .then((done) => {
    console.log(done);
  })
  .catch((err) => {
    console.log(err);
  });

// We first create a `Promise` object and internally we use an
// asynchronous timer to execute a statement after 1 second.

// We can call `reject` to delibertely fail to function.
