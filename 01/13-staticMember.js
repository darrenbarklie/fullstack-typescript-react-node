var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    return ClassA;
}());
var a = new ClassA();
// console.log(a.typeName);
// => Property 'typeName' does not exist on type 'ClassA'.
// Did you mean to access the static member
// 'ClassA.typeName' instead?
console.log(ClassA.typeName);
// => undefined
// Why use a static member instead of an instance member?
// Certain circumstances deem it useful to share data across
// class instances:
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var runA = new Runner("run-a");
var runB = new Runner("run-b");
runB.run();
runA.run();
console.log(Runner.lastRunTypeName);
