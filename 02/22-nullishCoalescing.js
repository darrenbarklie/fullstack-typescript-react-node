// Nullish coalescing is simple a shortcut of the
// ternary operator
// If val1 is not `null` or `undefined` and has an
// actual value, return that
// If val1 is `null` or `undefined`, return val2
var val1 = undefined;
var val2 = 10;
var result = val1 !== null && val1 !== void 0 ? val1 : val2;
console.log(result);
