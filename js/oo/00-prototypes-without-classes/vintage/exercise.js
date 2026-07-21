// Create a constructor-function hierarchy without using `class`:
//
// Person
// └── Teacher
//
// Requirements:
// 1. Person initializes name and age.
// 2. Person.prototype.introduce() returns:
//    "I'm <name> and I'm <age> years old."
// 3. Teacher calls Person with `.call(...)` to reuse initialization.
// 4. Teacher also initializes subject.
// 5. Connect Teacher.prototype to Person.prototype with Object.create(...).
// 6. Restore Teacher.prototype.constructor.
// 7. Teacher.prototype.teach() returns:
//    "<name> teaches <subject>."

// Write your implementation here.


// Uncomment to test it.
// const teacher = new Teacher("Marta", 35, "JavaScript");
// console.log(teacher.introduce());
// console.log(teacher.teach());
// console.log(teacher instanceof Person);  // true
// console.log(teacher instanceof Teacher); // true

