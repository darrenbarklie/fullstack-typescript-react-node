// Generics allows a type definition to include an associated
// type that can be chosen by the user of the generic type, instead
// of being dictated by the type creator.

// Generics can be used for functions, classes and interfaces

// Wherever the <T> character is encountered, expect any possible type
// function getLength<T>(arg: T): number {
//   if (arg.hasOwnProperty("length")) {
//     return arg["length"];
//   }
//   return 0;
// }

// Abbreviate above code block, using inteface to constrain
// what types are allowed
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

// You can explictedly expect a type...
// console.log(getLength<number>(22));
// Type 'number' does not satisfy the constraint 'HasLength'

// ...or not.
console.log(getLength("Hello world"));
