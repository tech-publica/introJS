// Before classes, we might create each student separately.
const studentObject = {
  name: "Maya",
  age: 16,
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log("Object literal:");
console.log(studentObject.introduce());

// A class is a reusable blueprint for creating similar objects.
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// `new` creates a separate instance of the Student class.
const alice = new Student("Alice", 16);
const bob = new Student("Bob", 17);

console.log("\nClass instances:");
console.log(alice.introduce());
console.log(bob.introduce());

console.log("\nEach instance has its own data:");
alice.age = 17;
console.log(alice.introduce());
console.log(bob.introduce());

console.log("\nWas Alice created from Student?");
console.log(alice instanceof Student);

