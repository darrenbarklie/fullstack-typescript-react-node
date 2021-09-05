type Points = 20 | 30 | 40 | 50;
let score: Points = 20;

console.log(score);
// => 20

// score = 99;
// => Type '99' is not assignable to type 'Points'

type ComplexPerson = {
  name: string;
  age: number;
  birthday: Date;
  married: boolean;
  address: string;
};

let daz: ComplexPerson = {
  name: "daz",
  age: 101,
  birthday: new Date("2012-05-24"),
  married: false,
  address: "101 Lost and Found",
};

console.log(daz);
// => { ... }

// Since the type declaration is very long and does
// not have a name (as a class would), we use an
// alias instead. Type aliasing can be used for just
// about any type in TypeScript, including functions
// and generics
