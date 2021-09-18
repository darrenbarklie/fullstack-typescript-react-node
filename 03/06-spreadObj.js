var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = "A";
        }
    }
    class B {
        constructor() {
            this.bname = "B";
        }
    }
    const a = new A();
    const b = new B();
    const c = Object.assign(Object.assign({}, a), b);
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
})(NamespaceA || (NamespaceA = {}));
