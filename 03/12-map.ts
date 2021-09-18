namespace namespaceMap {
  const employees = [
    { name: "Daz", id: 1, age: 35 },
    { name: "Claire", id: 2, age: 31 },
    { name: "Harley", id: 3, age: 24 },
    { name: "Popeye", id: 4, age: 4 },
  ];

  const elements = employees.map((item, index) => {
    return `<div>${item.id} - ${item.name}</div>`;
  });

  console.log(elements);

  // => [
  // => "<div>1 - Daz</div>",
  // => "<div>2 - Claire</div>",
  // => "<div>3 - Harley</div>",
  // => "<div>4 - Popeye</div>",
  // => ];
}
