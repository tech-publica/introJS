function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.eat = function () {
  return `${this.name} is eating.`;
};

function Dog(name, age, breed) {
  // Reuse Animal's initialization with this dog as `this`.
  Animal.call(this, name, age);
  this.breed = breed;
}

// Dog instances delegate to Dog.prototype, which delegates to Animal.prototype.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} says woof.`;
};

const rex = new Dog("Rex", 4, "Labrador");

console.log(rex.eat());
console.log(rex.bark());
console.log(`Breed: ${rex.breed}`);

console.log("\nPrototype checks:");
console.log(Object.getPrototypeOf(rex) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
console.log(rex instanceof Dog);
console.log(rex instanceof Animal);

console.log("\nWhere are the methods?");
console.log(Object.hasOwn(rex, "bark"));
console.log(Object.hasOwn(Dog.prototype, "bark"));
console.log(Object.hasOwn(Animal.prototype, "eat"));

