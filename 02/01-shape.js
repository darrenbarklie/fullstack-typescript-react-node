// class called Person
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// type {name: string} defined and declared
// at the same time
var daz = {
    name: "daz"
};
var person = daz;
console.log(person);
// tsc 01-shape
// node 01-shape
//  => { name: 'daz' }
// In TypeScript, the compiler looks at the
// shape of the type and is not concerned with
// its name at all
