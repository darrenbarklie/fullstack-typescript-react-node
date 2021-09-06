namespace VehicleAbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    // `abstract` keyword indicates no implementation within
    // Vehicle class and needs to be implemented by an
    // inheriting class
    abstract updateWheelCount(newWheelCount: number): void;

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
      console.log(`Motorcycle has ${this.wheelCount} wheels`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount} wheels`);
    }
  }

  const motorcycle = new Motorcycle();
  motorcycle.updateWheelCount(1);
  const automobile = new Automobile();
  automobile.updateWheelCount(3);
}

// Implementation of the `abstract` member `updateWheelCount`
// is available in the child classes.

// Automobile class has its own implementation of `showNumberOfWheels`
// even though this function is not abstract.  This demonstrates
// overriding -- the ability of a child's member to create a
// unique implementation of the parent's member.
