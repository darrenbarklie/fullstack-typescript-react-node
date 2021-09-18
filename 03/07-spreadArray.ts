namespace SpreadArray {
  const a = [1, 2, 3];
  const b = [4, 5, 6];

  const c = [...a, ...b];
  const d = a.concat(b);
  console.log("c before", c);
  console.log("d before", d);
  // => c before [ 1, 2, 3, 4, 5, 6 ]
  // => d before [ 1, 2, 3, 4, 5, 6 ]

  a.push(10);
  console.log("a pushed", a);
  // => a pushed [ 1, 2, 3, 10 ]

  console.log("c after", c);
  console.log("d after", d);
  // => c after [ 1, 2, 3, 4, 5, 6 ]
  // => d after [ 1, 2, 3, 4, 5, 6 ]

  // The later after console logs prove a new object is
  // created every time, as the modifed `a` with `10`
  // pushed, doesn't modify the result
}
