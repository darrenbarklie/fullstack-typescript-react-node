const userIds = [2, 1, 2, 2, 1, 2, 2, 1, 2, 3, 4, 5];

const uniqueIds = new Set(userIds);
console.log(uniqueIds);
// => Set(5) { 2, 1, 3, 4, 5 }

uniqueIds.add(10);
console.log("Add 10: ", uniqueIds);
// => Add 10:  Set(6) { 2, 1, 3, 4, 5, 10 }

console.log("Has: ", uniqueIds.has(2));
// => Has: true;

console.log("Size: ", uniqueIds.size);
// => Size:  6

for (let item of uniqueIds) {
  console.log("iterate: ", item);
}
// => iterate:  2
// => iterate:  1
// => iterate:  3
// => iterate:  4
// => iterate:  5
// => iterate:  10

// There are many members of the `Set` object, but these are
// some of its most important features.

// `Set` has a constructor that can take an array, which makes
// that array a unique set.

// Important note: In regards to sets, `size` is used to check
// quantity and not length.

// Conceptually, iterating `Set` is quite similar to an array, but
// is optimised for unique collections.
