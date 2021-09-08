// Question marks indicate that the object could possibly
// be `null` or `undefined` and so end at that object and
// not continue to the rest of the properties
var OptionalChainingNamespace;
(function (OptionalChainingNamespace) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }());
    var car = new Automobile({
        count: undefined
    });
    console.log("car: ", car);
    console.log("wheels: ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count: ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
})(OptionalChainingNamespace || (OptionalChainingNamespace = {}));
// Without optional chaining, we would have to author
// the following logic block:
// const count = !car ? 0
//     : !car.wheels ? 0
//     : !car.wheels.count ? 0
//     : car.wheels.count;
