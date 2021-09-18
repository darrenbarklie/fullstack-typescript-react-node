// Functions have access to an internal object called `this`
// that represents the caller of the function.

// What is confusing is that the value of `this` can change
// depending on how the function is called.

// JavaScript provides some helpers that allow you to reset
// the `this` object of a function to the one you want, rather
// than the one given to you.

// There are several methods: `apply`, `call` and `bind`.

// `bind` is often used in React class-based components.

class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();
// => A

const b = new B();
// b.go();
// => B

b.go = b.go.bind(a);
b.go();
// => A

// When we reset the `this` object's `bind` of our `b` object's `go`
// function to be the `a` object, it switches the `console.log(this.name)`
// statement to use `a` as the `this` object.

// We switched `this` to be an instance of `b`.

// `bind` can also take any number of parameters thereafter.

// `bind` is used to make the `this` context change and later,
// when the function is called, it will have the changed
// `this` object.
