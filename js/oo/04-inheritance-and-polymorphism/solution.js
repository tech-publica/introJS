class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  move() {
    return `${this.brand} is moving.`;
  }
}

class Car extends Vehicle {
  constructor(brand, fuelType) {
    super(brand);
    this.fuelType = fuelType;
  }

  move() {
    return `${super.move()} The car uses ${this.fuelType} fuel.`;
  }
}

class Bicycle extends Vehicle {
  constructor(brand, numberOfGears) {
    super(brand);
    this.numberOfGears = numberOfGears;
  }

  move() {
    return `${super.move()} The bicycle has ${this.numberOfGears} gears.`;
  }
}

const vehicles = [
  new Vehicle("Generic"),
  new Car("Toyota", "hybrid"),
  new Bicycle("Trek", 18),
];

for (const vehicle of vehicles) {
  console.log(vehicle.move());
}
