function runMore(distance: number): number {
  return distance + 10;
}
console.log(runMore(100));
// => 110

// Function takes a parameter of the `number` type,
// and returns a number. The function return comes
// after the parentheses and indicates what type is
// returned by the function

// If a function returns nothing, either don't declare
// a type, or you can declare `void` to be explicit

function eat(calories: number) {
  console.log(`I ate ${calories} calories`);
}
function sleepIn(hours: number): void {
  console.log(`I slept in ${hours} hours`);
}

let ate = eat(100);
console.log(ate);
// => I ate 100 calories
// => undefined

let slept = sleepIn(10);
console.log(slept);
// => I slept in 10 hours
// => undefined

// The two internal `console.log()` functions run as
// expected, however trying to grab a return value results
// in `undefined` since nothing is returned
