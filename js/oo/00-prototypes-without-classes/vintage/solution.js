function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `I'm ${this.name} and I'm ${this.age} years old.`;
};

function Teacher(name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
  return `${this.name} teaches ${this.subject}.`;
};

const teacher = new Teacher("Marta", 35, "JavaScript");

console.log(teacher.introduce());
console.log(teacher.teach());
console.log(teacher instanceof Person);
console.log(teacher instanceof Teacher);

