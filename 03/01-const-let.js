var constants;
(function (constants) {
    var val1 = 1;
    val1 = 2;
    // Cannot assign to 'val1' because it is a constant
    // Cannot reset a const to an entirely new variable
    var val2 = [];
    val2.push("hello");
    // Allowed as value remains an array, but a new
    // element is added to it
})(constants || (constants = {}));
var lets;
(function (lets) {
    var val1 = 1;
    val1 = 2;
    if (true) {
        var val2 = 3;
        val2 = 3;
    }
    console.log(val1);
    console.log(val2);
    // val2 let only exists inside the if statement
    // block scope
})(lets || (lets = {}));
// Best practice is to use consts, but use let as exception were
// specifically required. Don't use var.
