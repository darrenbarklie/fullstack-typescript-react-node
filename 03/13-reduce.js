// The `reduce` function is an aggregator that takes each
// element in an array and, based on custom logic, creates
// a single final value.

const allTrucks = [2, 5, 7, 10];

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
  totalCapacity = totalCapacity + currentCapacity;

  return totalCapacity;
}, initialCapacity);

console.log(allTonnage);
// => 24

// `initialCapacity` is declared to give the function a starting point
