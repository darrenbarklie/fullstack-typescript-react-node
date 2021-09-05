class Person {
  // constructor() {}
  // msg: string;

  constructor(private readonly msg: string) {}
  // private keyword is shortcut access modifier
  // field is inaccessible from outside the class

  // readonly causes a field to become read-only
  // after it is set in the constructor

  speak() {
    console.log(this.msg);
  }
}

// const daz = new Person();
// => An argument for 'msg' was not provided.

// daz.msg = "hello";
// => Property 'msg' is private and only accessible
// within class 'Person'

const daz = new Person("hello");
daz.speak();
// => hello

// Simple class, comprised of:
// - name of class for reuse
// - constructor to initialise fields & other setup
// - single variable called `msg`
// - single function called `speak()`

// Create an instance of the class with 'new Person()'
// Set the msg field to value of 'hello'
