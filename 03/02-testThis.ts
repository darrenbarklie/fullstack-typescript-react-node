function MyFunction() {
  console.log(this);
}

MyFunction();
// => <ref *1> Object [global] { ... }

// When `MyFunction()` is called directly, the immedicate scope
// parent is Node's global object, since we're not running
// inside a browser.

console.log(`---------`);

let test = new MyFunction();
// => MyFunction{}

// If we create a new object with `new MyFunction()`, the `this`
// object becomes its own object instance since the function was
// used to create an new object, as oppose to being run directly.
