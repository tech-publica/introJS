const animalPrototype = {
  eat() {
    return `${this.name} is eating.`;
  },
};

function initializeAnimal(animal, name, age) {
  animal.name = name;
  animal.age = age;
}

function createAnimal(name, age) {
  const animal = Object.create(animalPrototype);
  initializeAnimal(animal, name, age);
  return animal;
}

const dogPrototype = Object.create(animalPrototype);

dogPrototype.bark = function () {
  return `${this.name} says woof.`;
};

function createDog(name, age, breed) {
  const dog = Object.create(dogPrototype);
  initializeAnimal(dog, name, age);
  dog.breed = breed;
  return dog;
}

const genericAnimal = createAnimal("Nemo", 2);
const rex = createDog("Rex", 4, "Labrador");

console.log(genericAnimal.eat());
console.log(rex.eat());
console.log(rex.bark());
console.log(`Breed: ${rex.breed}`);

console.log("\nPrototype checks:");
console.log(Object.getPrototypeOf(rex) === dogPrototype);
console.log(Object.getPrototypeOf(dogPrototype) === animalPrototype);
console.log(dogPrototype.isPrototypeOf(rex));
console.log(animalPrototype.isPrototypeOf(rex));

console.log("\nWhere are the methods?");
console.log(Object.hasOwn(rex, "bark"));
console.log(Object.hasOwn(dogPrototype, "bark"));
console.log(Object.hasOwn(animalPrototype, "eat"));

