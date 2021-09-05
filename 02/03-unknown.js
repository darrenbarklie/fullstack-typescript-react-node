// Consider 'unknown' more of a label than a type
// Underneath that label is the actual type
// We need to explicitly prove the type to the compiler
var val2 = 22;
val2 = "string value";
val2 = new Array();
// val2.push(33);
// => Property 'push' does not exist on type 'unknown'
// Use type guards to prove a type
if (val2 instanceof Array) {
    val2.push(33);
}
console.log(val2);
