namespace constants {
  const val1 = 1;
  val1 = 2;
  // Cannot assign to 'val1' because it is a constant
  // Cannot reset a const to an entirely new variable

  const val2 = [];
  val2.push("hello");
  // Allowed as value remains an array, but a new
  // element is added to it
}

namespace lets {
  let val1 = 1;
  val1 = 2;

  if (true) {
    let val2 = 3;
    val2 = 3;
  }

  console.log(val1);
  console.log(val2);
  // val2 let only exists inside the if statement
  // block scope
}

// Best practice is to use consts, but use let as exception were
// specifically required. Don't use var.
