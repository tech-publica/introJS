// Create the same hierarchy as the vintage exercise, this time using prototype
// objects, initializer functions, and factory functions. Do not use class or new.
//
// personPrototype
// └── teacherPrototype
//
// Requirements:
// 1. personPrototype.introduce() returns:
//    "I'm <name> and I'm <age> years old."
// 2. initializePerson(person, name, age) assigns instance data.
// 3. createPerson(name, age) creates and returns a person.
// 4. teacherPrototype delegates to personPrototype.
// 5. teacherPrototype.teach() returns:
//    "<name> teaches <subject>."
// 6. createTeacher(name, age, subject) creates, initializes, and returns a teacher.

// Write your implementation here.


// Uncomment to test it.
// const teacher = createTeacher("Marta", 35, "JavaScript");
// console.log(teacher.introduce());
// console.log(teacher.teach());
// console.log(personPrototype.isPrototypeOf(teacher));  // true
// console.log(teacherPrototype.isPrototypeOf(teacher)); // true

