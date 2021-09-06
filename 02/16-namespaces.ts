// Providing scope with namespaces hides whatever is
// inside one namespace from the outside of it. It acts
// like a class, but is capable of containing any number
// of classes, functions, variables or any other types.

namespace A {
  class FirstClass {}
}

namespace B {
  class SecondClass {}
  const test = new FirstClass();
  // => Cannot find name 'FirstClass'
}
