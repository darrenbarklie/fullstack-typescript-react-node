// `bind` is used to make the `this` context change and later,
// when the function is called, it will have the changed
// `this` object.

// `call` and `apply` are used at the time the function is
// called and immediately replace the `this` context at the
// time of calling.

// `call` takes an indeterminate nunber of parameters
// `apply` takes an array of parameters

const callerObj = {
  name: "Daz",
};

function checkMyThis(age) {
  console.log(`What is this? ${this}`);
  console.log(`Do I have a name? ${this.name}`);
  this.age = age;
  console.log(`What is my age? ${this.age}`);
}

checkMyThis();

// => What is this? [object global]
// => Do I have a name? undefined
// => What is my age? undefined

// The first execution of the `checkMyThis` function
// uses the global object by default, since it was not
// overridden. The global object does not have the `name`
// field. No `age` was passed as a parameter on invocation.
// Both values are therefore `undefined`.

checkMyThis.call(callerObj, 35);

// => What is this? [object Object]
// => Do I have a name? Daz
// => What is my age? 35

// On the second execution of the function, we see that
// the object has changed to a standard Object type,
// therefore has a `name` field and an `age` as passed
// by the parameter.

// Note that the parameters list for `call` follows the
// order of the parameters list of the function being
// called.

checkMyThis.apply(callerObj, [35]);

// => What is this? [object Object]
// => Do I have a name? Daz
// => What is my age? 35

// The usage of `apply` is identical to `call`, however
// it takes parameters as an array.
