namespace ClassGenericNamespace {
  interface Wheels {
    count: number;
    diameter: number;
  }

  interface Vehicle<T> {
    getName(): string;
    getWheelCount: () => T;
  }

  class Automobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels) {}

    getName(): string {
      return this.name;
    }

    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  class Chevy extends Automobile {
    constructor() {
      super("Chevy", { count: 12, diameter: 100 });
    }
  }

  const chevy = new Chevy();
  console.log("car name: " + chevy.getName());
  // BUG: Returns `wheels: [object object]`
  console.log("wheels: " + chevy.getWheelCount());
}
