var Person = /** @class */ (function () {
    // constructor() {}
    // msg: string;
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
// const daz = new Person();
// => An argument for 'msg' was not provided.
// daz.msg = "hello";
// => Property 'msg' is private and only accessible
// within class 'Person'
var daz = new Person("hello");
daz.speak();
// => hello
// Simple class, comprised of:
// - name of class for reuse
// - constructor to initialise fields & other setup
// - single variable called `msg`
// - single function called `speak()`
// Create an instance of the class with 'new Person()'
// Set the msg field to value of 'hello'
