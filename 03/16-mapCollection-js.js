// `Map` is a collection of key-value paris, a.k.a a dictionary.
// Every member of `Map` has a unique key.

const mappedEmp = new Map();
mappedEmp.set("daz", { fullName: "Darren Barklie", id: 1 });
mappedEmp.set("claire", { fullName: "Ho Ngoc Bao Nghi", id: 2 });
mappedEmp.set("harley", { fullName: "Harley Garrett", id: 3 });
mappedEmp.set("pops", { fullName: "Popeye", id: 4 });

console.log(mappedEmp);
// => Map(4) {
// =>   'daz' => { fullName: 'Darren Barklie', id: 1 },
// =>   'claire' => { fullName: 'Ho Ngoc Bao Nghi', id: 2 },
// =>   'harley' => { fullName: 'Harley Garrett', id: 3 },
// =>   'pops' => { fullName: 'Popeye', id: 4 }
// => }

console.log("get: ", mappedEmp.get("pops"));
// => get:  { fullName: 'Popeye', id: 4 }

console.log("size: ", mappedEmp.size);
// => size:  4

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
// => iterate daz { fullName: 'Darren Barklie', id: 1 }
// => iterate claire { fullName: 'Ho Ngoc Bao Nghi', id: 2 }
// => iterate harley { fullName: 'Harley Garrett', id: 3 }
// => iterate pops { fullName: 'Popeye', id: 4 }
