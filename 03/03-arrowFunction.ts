const myFunc = (message: string): void => {
  console.log(message);
};

// Return type `void`, as nothing is returned (only log method)

myFunc("Hello");

// All non-arrow functions in JavaScript have access to a collection
// called `arguements`. This is a collection of all the parameters
// given to a function.

// Arrow functions do not have thier own `arguments` collection.

// However, they do have access to the immedate function parent's
// `arguments` collection.

// The arrow function has several body styles:

// Style 1 : Single line of code is used in the function body,
// and nothing is returned (`undefined`).
const func1 = () => console.log("func1");

console.log(func1());
// => func1
// => undefined

// Style 2: Single line of code, but something is retruned.
// Parentheses are needed if only an object is returned.
const func2 = () => ({ name: "Daz" });

console.log(func2());
// => { name: 'Daz' }

// Style 3: Curly brackets are needed because it is a multi-
// line statement (regardless or returning anything or not).
const func3 = () => {
  const name = "Daz";
  return name;
};

console.log(func3());
// => Daz
