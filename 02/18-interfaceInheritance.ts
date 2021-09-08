namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberOfWheels: () => void;
  }

  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;
    constructor(name: string) {
      // No super for interfaces
      this.name = name;
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`Moved Automobile ${this.wheelCount} miles`);
    }

    getFullName() {
      return "MC-" + this.name;
    }
  }

  const motorcycle = new Motorcycle("beginner-cycle");
  console.log(motorcycle.getFullName());
}

// Interfaces can also inherit from other interfaces
// Vehicle is an interface and therefore cannot have
// any implementation, hence no mention of `name` or
// `getFullName`
