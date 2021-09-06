// Inheritance in object-oriented programming
// is a method for code re-use, shrinking our
// application size, improving readability and
// reducing potential for bugs.

class Vehicle {
  // Change `private` to `protected`, so children
  // can inherit members from this parent
  constructor(protected wheelCount: number) {}

  showNumberOfWheels() {
    console.log(`Vehicle has ${this.wheelCount} wheels`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
    // => Property 'wheelCount' is private and only
    // accessible within class 'Vehicle'
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorcycle = new Motorcycle();
motorcycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();

// Each child provides a different number of wheels
// to the parent `wheelCount` varaible, although they
// cannot see the variable directly

// `protected` allows the class and any inheriting classes
// to have access to the member
