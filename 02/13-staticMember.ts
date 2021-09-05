class ClassA {
  static typeName: string;

  constructor() {}

  static getFullName() {
    return "ClassA " + ClassA.typeName;
  }
}

const a = new ClassA();

// console.log(a.typeName);
// => Property 'typeName' does not exist on type 'ClassA'.
// Did you mean to access the static member
// 'ClassA.typeName' instead?

console.log(ClassA.typeName);
// => undefined

// Why use a static member instead of an instance member?
// Certain circumstances deem it useful to share data across
// class instances:

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const runA = new Runner("run-a");
const runB = new Runner("run-b");

runB.run();
runA.run();

console.log(Runner.lastRunTypeName);
// => run-a
