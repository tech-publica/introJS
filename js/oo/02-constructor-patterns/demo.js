class Student {
  constructor(name, age = null, course = "Undeclared") {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  static withName(name) {
    return new Student(name);
  }

  static withDetails(name, age, course) {
    return new Student(name, age, course);
  }

  describe() {
    const ageText = this.age === null ? "age unknown" : `age ${this.age}`;
    return `${this.name}: ${ageText}, course: ${this.course}`;
  }
}

console.log("Default parameters:");
const alice = new Student("Alice");
const bob = new Student("Bob", 17, "JavaScript");
console.log(alice.describe());
console.log(bob.describe());

console.log("\nNamed factory methods:");
const carla = Student.withName("Carla");
const daniel = Student.withDetails("Daniel", 18, "Web Development");
console.log(carla.describe());
console.log(daniel.describe());

class ConfigurableStudent {
  constructor({ name, age = null, course = "Undeclared" }) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  describe() {
    const ageText = this.age === null ? "age unknown" : `age ${this.age}`;
    return `${this.name}: ${ageText}, course: ${this.course}`;
  }
}

console.log("\nOptions object:");
const eva = new ConfigurableStudent({
  name: "Eva",
  course: "Object-Oriented JavaScript",
});
console.log(eva.describe());

