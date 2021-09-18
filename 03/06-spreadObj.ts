namespace NamespaceA {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();

  const c = { ...a, ...b };
  const d = Object.assign(a, b);

  console.log(c);
  // =>   { aname: 'A', bname: 'B' }
  console.log(d);
  // => A { aname: 'A', bname: 'B' }

  a.aname = "a1";

  console.log(c);
  // => { aname: 'A', bname: 'B' }
  console.log(d);
  // => A { aname: 'a1', bname: 'B' }
}

// `c` has both `aname` and `bname` properties, but is
// a unique object unto itself.

// `d` is actually object `a` with the properties of
// object `b`, as demonstrated by the `aname` variable
// being equal to `a1` after being set.
