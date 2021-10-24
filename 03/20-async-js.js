// `async` does two main things: cleans up the code, making
// it simplier and smaller and makes the code easier to follow
// as it _looks_ like async code.

async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I completed successfully!");
    }, 1000);
  });
}

(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
