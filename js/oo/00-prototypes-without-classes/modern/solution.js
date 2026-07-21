const personPrototype = {
  introduce() {
    return `I'm ${this.name} and I'm ${this.age} years old.`;
  },
};

function initializePerson(person, name, age) {
  person.name = name;
  person.age = age;
}

function createPerson(name, age) {
  const person = Object.create(personPrototype);
  initializePerson(person, name, age);
  return person;
}

const teacherPrototype = Object.create(personPrototype);

teacherPrototype.teach = function () {
  return `${this.name} teaches ${this.subject}.`;
};

function createTeacher(name, age, subject) {
  const teacher = Object.create(teacherPrototype);
  initializePerson(teacher, name, age);
  teacher.subject = subject;
  return teacher;
}

const person = createPerson("Luca", 28);
const teacher = createTeacher("Marta", 35, "JavaScript");

console.log(person.introduce());
console.log(teacher.introduce());
console.log(teacher.teach());
console.log(personPrototype.isPrototypeOf(teacher));
console.log(teacherPrototype.isPrototypeOf(teacher));
