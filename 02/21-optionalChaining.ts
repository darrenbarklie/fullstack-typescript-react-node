// Question marks indicate that the object could possibly
// be `null` or `undefined` and so end at that object and
// not continue to the rest of the properties

namespace OptionalChainingNamespace {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | null = new Automobile({
    count: undefined,
  });

  console.log("car: ", car);
  console.log("wheels: ", car?.wheels);
  console.log("count: ", car?.wheels?.count);
}

// Without optional chaining, we would have to author
// the following logic block:

// const count = !car ? 0
//     : !car.wheels ? 0
//     : !car.wheels.count ? 0
//     : car.wheels.count;
