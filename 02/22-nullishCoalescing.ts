// Nullish coalescing is simple a shortcut of the
// ternary operator

// If val1 is not `null` or `undefined` and has an
// actual value, return that

// If val1 is `null` or `undefined`, return val2

const val1 = undefined;
const val2 = 10;
const result = val1 ?? val2;
console.log(result);
