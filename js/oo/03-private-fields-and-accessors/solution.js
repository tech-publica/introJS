class Temperature {
  #celsius;

  constructor(celsius) {
    this.celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Temperature must be a finite number.");
    }

    if (value < -273.15) {
      throw new RangeError("Temperature cannot be below absolute zero.");
    }

    this.#celsius = value;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const temperature = new Temperature(20);
console.log(`${temperature.celsius}°C`);
console.log(`${temperature.fahrenheit}°F`);

temperature.celsius = 30;
console.log(`${temperature.fahrenheit}°F`);

try {
  temperature.celsius = -300;
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
