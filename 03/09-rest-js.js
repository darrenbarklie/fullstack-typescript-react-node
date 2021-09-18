// Rest is a feature thta allows you to refer to an
// indefinite set of parameters with on keyword: `...`,
// referring to "the rest of the items".

// This keyword allows more flexibility when creating your
// funciton signature, as it allows the caller to determine
// how many parameters they want to pass.

// Note: Only the last parameter can the the rest param.

function doSomething(a, ...others) {
  console.log(a, others, others[others.length - 1]);
}
doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9);

// => 1 [
// =>   2, 3, 4, 5,
// =>   6, 7, 8, 9
// => ] 9
