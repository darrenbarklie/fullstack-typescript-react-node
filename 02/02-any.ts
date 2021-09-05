let val: any = 22;
val = "string value";
val = new Array();
// val.push(33);
// => [ 33 ]

// val.methodDoesNotExist(33);
// Compiler runs, error on runtime:
// TypeError: val.methodDoesNotExist is not a function

console.log(val);
