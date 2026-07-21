# Lesson 1: Classes and Objects

## Learning goals

By the end of this lesson, students should be able to:

- explain the difference between a class and an object;
- declare a class with the `class` keyword;
- initialize an object with a `constructor`;
- use `this` to access an object's properties;
- create an instance with `new`;
- define and call an instance method.

## 1. Start with object literals

JavaScript object literals are useful for describing individual objects:

```js
const alice = {
  name: "Alice",
  age: 16,
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};
```

If we need many students, repeating the same object structure and method becomes
inconvenient. A class gives us one reusable blueprint.

## 2. Introduce the class

Open `demo.js` and identify these parts:

- `Student` is the class, or blueprint.
- `constructor` receives the starting data for each student.
- `this` means the particular object being created or used.
- `introduce` is a method shared by all `Student` instances.
- `new Student(...)` creates a new instance.

Run the demonstration from the project root:

```sh
node js/oo/01-classes-and-objects/demo.js
```

Before running it, ask students to predict the output.

## 3. Explore

Have students make these small changes in `demo.js`:

1. Create another student with a different name and age.
2. Call the new student's `introduce()` method.
3. Change one student's age and call the method again.
4. Check whether an instance was created from the class:

```js
console.log(alice instanceof Student);
```

Discuss why changing one student does not change the others.

## 4. Exercise

Complete `exercise.js` by creating a `Book` class. A book must have:

- a `title` property;
- an `author` property;
- a `describe()` method that returns a sentence containing both values.

Run it with:

```sh
node js/oo/01-classes-and-objects/exercise.js
```

After attempting the exercise, compare it with `solution.js`.

## Key vocabulary

- **Class:** a reusable blueprint for objects.
- **Instance:** an object created from a class.
- **Constructor:** the method that initializes a new instance.
- **Property:** data stored on an object.
- **Method:** a function that belongs to an object.

