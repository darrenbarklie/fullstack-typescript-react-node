// Destructuring is the ability to display and directly use
// the interal properties of an object, instead of relying
// on the object name alone.

// Use object destructuring to retrieve only the fields that
// we care about.

function getEmployee(id) {
  return {
    name: "Daz",
    age: 35,
    address: "123 Street St",
    country: "IOM",
  };
}

const { name: fullName, age } = getEmployee(22);
console.log("employee: ", fullName, age);
// => employee:  Daz 35

// Note: Alias `fullName` assigned with colon

// Destructuring is also possible for arrays. Note that
// the ordering of elements does matter at destructure time.

function getEmployeeWorkInfo(id) {
  return [id, "Office St", "UK"];
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log("employee: ", id, officeAddress);
// => employee:  33 Office St

const [id2, _, country2] = getEmployeeWorkInfo(32);
console.log("employee: ", id2, country2);
// => employee:  32 UK
