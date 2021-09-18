// `filter` behaves similar to `find` except it returns
// all instances matching the search criteria.
var namespaceFilter;
(function (namespaceFilter) {
    const items = [
        { name: "Daz", age: 35 },
        { name: "Claire", age: 31 },
        { name: "Harley", age: 24 },
        { name: "Popeye", age: 4 },
        { name: "Popeye", age: 5 },
    ];
    const doubleTrouble = items.filter((item, index) => {
        return item.name === "Popeye";
    });
    console.log(doubleTrouble);
})(namespaceFilter || (namespaceFilter = {}));
