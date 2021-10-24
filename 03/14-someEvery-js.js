const widgets = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "yellow" },
  { id: 4, color: "green" },
];

console.log(
  "Some are blue: ",
  widgets.some((item) => {
    return item.color === "blue";
  })
);
// => Some are blue: true

console.log(
  "Every one is blue: ",
  widgets.every((item) => {
    return item.color === "blue";
  })
);
// => Every one is blue: false
