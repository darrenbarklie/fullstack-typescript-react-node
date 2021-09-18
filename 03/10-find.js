const items = [
    { name: "Daz", age: 35 },
    { name: "Claire", age: 31 },
    { name: "Harley", age: 24 },
    { name: "Popeye", age: 4 },
    { name: "Popeye", age: 5 },
];
const pops = items.find((item) => {
    return item.name === "Popeye";
});
console.log(pops);
// => { name: 'Popeye', age: 4 }
