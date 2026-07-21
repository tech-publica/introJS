# Lesson 2: Constructor Patterns

## Learning goals

By the end of this lesson, students should be able to:

- explain why JavaScript does not support constructor overloading;
- use default parameters for optional constructor arguments;
- use an options object for flexible object creation;
- use static factory methods as named alternatives to constructors.

## Java and JavaScript

Java allows several constructors with different parameter lists:

```java
class Student {
    Student(String name) { /* ... */ }
    Student(String name, int age) { /* ... */ }
}
```

JavaScript permits zero or one explicit `constructor` per class. Declaring two is
a syntax error. JavaScript functions do not have signatures based on parameter
types or counts, so constructor overloading must be represented with other
patterns.

## Pattern 1: default parameters

Use default parameters when only a few values are optional:

```js
class Student {
  constructor(name, age = null) {
    this.name = name;
    this.age = age;
  }
}
```

Both calls use the same constructor:

```js
new Student("Alice");
new Student("Bob", 17);
```

Unlike Java, JavaScript does not check the declared type of an argument.

## Pattern 2: an options object

Use an object when there are several optional values:

```js
class Student {
  constructor({ name, age = null, course = "Undeclared" }) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}
```

The call is self-documenting, and the order of properties does not matter.

## Pattern 3: static factory methods

Named factory methods express different ways of creating an instance:

```js
Student.withName("Alice");
Student.withDetails("Bob", 17, "JavaScript");
```

This is often clearer than inspecting argument types or `arguments.length`
inside one constructor. Java also uses named static factory methods, although in
JavaScript they are especially useful because constructors cannot be overloaded.

Open and run the complete demonstration:

```sh
node js/oo/02-constructor-patterns/demo.js
```

## Exercise

Complete `exercise.js` by implementing an `Event` class with:

- one constructor that accepts an options object;
- a required `title`;
- an optional `location`, defaulting to `"Online"`;
- an optional `capacity`, defaulting to `0`;
- a static `online(title, capacity)` factory method;
- a `describe()` method.

Compare your work with `solution.js` after attempting it.

## Main takeaway

Java chooses among overloaded constructors using their signatures. JavaScript
has one constructor and represents alternative creation patterns with default
parameters, options objects, or named factory methods.

