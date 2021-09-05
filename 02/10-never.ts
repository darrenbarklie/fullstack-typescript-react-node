function oldEnough(age: number): never | boolean {
  if (age < 18) {
    throw Error("Too young!");
  }
  if (age >= 18) {
    return true;
  }
  return false;
}

console.log(oldEnough(19));
// => true

console.log(oldEnough(16));
// => throw Error("Too young!");

// A `never` type is used to indicate a function that never
// returns/completes, or a variable that is not set to anyting
// (not even `null`)

// `void` - function returns, just with no value (undefined)
// `never` - function does not return at all, nothing resulting

// Since encapsulation is a high-level principal for writing good
// code, it is beneficial to indicate explicitly that a failure of
// the function to return could occur without needing the developer
// to know about the internals of how the fucntion works, hence `never`
