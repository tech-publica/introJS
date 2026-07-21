class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  describeRole() {
    return `${this.name} is an employee.`;
  }

  calculateBonus() {
    return this.salary * 0.05;
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    // A derived constructor must call super() before it uses this.
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  describeRole() {
    return `${super.describeRole()} They work with ${this.programmingLanguage}.`;
  }

  calculateBonus() {
    return this.salary * 0.1;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  describeRole() {
    return `${super.describeRole()} They manage ${this.teamSize} people.`;
  }

  calculateBonus() {
    return this.salary * 0.15;
  }
}

const employees = [
  new Employee("Alice", 30_000),
  new Developer("Bob", 40_000, "JavaScript"),
  new Manager("Carla", 50_000, 6),
];

console.log("Polymorphic method calls:");

for (const employee of employees) {
  console.log(employee.describeRole());
  console.log(`Bonus: €${employee.calculateBonus()}`);
}

console.log("\nInheritance checks:");
console.log(employees[1] instanceof Developer);
console.log(employees[1] instanceof Employee);

