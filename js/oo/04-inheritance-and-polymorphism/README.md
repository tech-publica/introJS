# Lesson 4: Inheritance and Polymorphism

## Learning goals

By the end of this lesson, students should be able to:

- create a subclass with `extends`;
- call a parent constructor with `super(...)`;
- override an inherited method;
- call a parent method with `super.method()`;
- recognize polymorphism when different objects respond to the same method call.

## Java and JavaScript

The basic inheritance syntax is deliberately familiar:

```java
class Developer extends Employee {
    Developer(String name, double salary) {
        super(name, salary);
    }
}
```

```js
class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
}
```

Important differences include:

| Java | JavaScript |
| --- | --- |
| Classes are class-based types | Classes are syntax built on prototypes |
| `@Override` can mark an overridden method | There is no override annotation or keyword |
| Types and method calls are checked statically | Method lookup happens dynamically at runtime |
| Variables normally declare a common type | An array can contain any mixture of values |
| Methods can be overloaded | Methods cannot be overloaded by signature |

## Extending a class

The `Employee` class in `demo.js` provides state and behavior that specialized
employees can inherit:

```js
class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }
}
```

When a derived class declares a constructor, it must call `super(...)` before it
uses `this`. The parent constructor initializes the inherited part of the object.

If a subclass does not declare a constructor, JavaScript supplies one equivalent
to this:

```js
constructor(...args) {
  super(...args);
}
```

## Overriding methods

A subclass overrides a method by declaring a method with the same name:

```js
calculateBonus() {
  return this.salary * 0.1;
}
```

There is no `@Override` annotation, and a misspelled method name silently creates
a different method. Tests and careful naming are therefore important.

The subclass can reuse the parent implementation:

```js
describeRole() {
  return `${super.describeRole()} They develop software.`;
}
```

`super.describeRole()` calls the parent version, while `this.describeRole()`
would start method lookup from the current object and call the overridden method.

## Polymorphism

Objects from different classes can receive the same method call:

```js
for (const employee of employees) {
  console.log(employee.calculateBonus());
}
```

JavaScript chooses the implementation from the object's runtime prototype chain.
Unlike Java, the variable does not need a declared `Employee` type.

Run the complete demonstration:

```sh
node js/oo/04-inheritance-and-polymorphism/demo.js
```

## Exercise

Complete `exercise.js` with this hierarchy:

```text
Vehicle
├── Car
└── Bicycle
```

Requirements:

- `Vehicle` stores a `brand` and has a `move()` method.
- `Car` also stores a `fuelType` and overrides `move()`.
- `Bicycle` also stores `numberOfGears` and overrides `move()`.
- Each override calls `super.move()` and adds specialized information.
- Put different vehicles in one array and call `move()` in a loop.

After attempting it, compare your work with `solution.js`.

## Main takeaway

Inheritance syntax is similar in Java and JavaScript, but JavaScript resolves
behavior dynamically through its prototype chain. `extends` and `super` provide
class-oriented syntax for that underlying mechanism.

