// class called Person
class Person {
  // property called name
  name: string;
}
// type {name: string} defined and declared
// at the same time
const daz: { name: string } = {
  name: "daz",
};

const person: Person = daz;
console.log(person);

// tsc 01-shape
// node 01-shape
//  => { name: 'daz' }

// In TypeScript, the compiler looks at the
// shape of the type and is not concerned with
// its name at all
