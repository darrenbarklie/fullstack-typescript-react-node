type Run = (miles: number) => boolean;
let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
};

console.log(runner(9));
// => false

// Run type alias makes reuse of the long function signature
// Actual function type is (miles: number) => boolean
// Only requirement is parameter, =>, and return type
