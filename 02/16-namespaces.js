// Providing scope with namespaces hides whatever is
// inside one namespace from the outside of it. It acts
// like a class, but is capable of containing any number
// of classes, functions, variables or any other types.
var A;
(function (A) {
    var FirstClass = /** @class */ (function () {
        function FirstClass() {
        }
        return FirstClass;
    }());
})(A || (A = {}));
var B;
(function (B) {
    var SecondClass = /** @class */ (function () {
        function SecondClass() {
        }
        return SecondClass;
    }());
    var test = new FirstClass();
    // => Cannot find name 'FirstClass'
})(B || (B = {}));
