# Lesson 0: Prototypes Without Classes

## Why start here?

JavaScript inheritance is prototype-based. The `class` syntax introduced in ES2015
does not replace prototypes; it provides clearer syntax for creating objects and
connecting their prototypes.

This lesson shows the mechanism before introducing class syntax. It is especially
useful for Java students because JavaScript's prototype chain differs fundamentally
from Java's class-based type system.

## Learning goals

By the end of this lesson, students should be able to:

- explain that an object can delegate property lookup to another object;
- create a prototype chain with `Object.create`;
- recognize constructor functions and the role of `new`;
- reuse initialization with `Parent.call(this, ...)`;
- create objects with factory functions instead of constructors;
- connect these patterns to `class`, `extends`, and `super`.

## The two approaches

```text
vintage/
  Constructor functions + new + Parent.call(this, ...)

modern/
  Factory functions + Object.create + explicit initialization
```

“Vintage” means the constructor-function style commonly used before ES2015
classes. “Modern” identifies a factory-oriented alternative that avoids `new`.
`Object.create` itself dates from ES5, so the factory pattern is not necessarily
newer or universally better. The two styles make different trade-offs.

## Prototype delegation

Given an object called `dog`, JavaScript looks for `dog.eat` in this order:

```text
dog
└── dogPrototype
    └── animalPrototype
        └── Object.prototype
            └── null
```

If a property is absent from the object, lookup continues along its prototype
chain. The object delegates the lookup; properties and methods are not copied
from one object to another.

## Suggested teaching order

1. Run and inspect `vintage/demo.js`.
2. Draw the instance and prototype chains separately.
3. Run and inspect `modern/demo.js`.
4. Compare object creation and method lookup in both versions.
5. Complete one exercise before looking at its solution.
6. In Lesson 4, translate the same ideas to `class`, `extends`, and `super`.

Run both demonstrations from the project root:

```sh
node js/oo/00-prototypes-without-classes/vintage/demo.js
node js/oo/00-prototypes-without-classes/modern/demo.js
```

## Mapping to class syntax

| Prototype-oriented code | Class syntax |
| --- | --- |
| `function Animal(...)` | `class Animal` plus `constructor(...)` |
| `Animal.prototype.eat` | `eat()` instance method |
| `Animal.call(this, ...)` | `super(...)` |
| `Object.create(Animal.prototype)` | `extends Animal` |
| `new Dog(...)` | `new Dog(...)` |
| Factory calling `Object.create(...)` | No exact class equivalent is required |

## Java perspective

Java instances are created from declared classes. JavaScript objects always have
a prototype chain regardless of whether class syntax, constructor functions,
factory functions, or object literals created them. JavaScript classes are useful
syntax, but the runtime method lookup still follows prototypes.

## Discussion

- Which version makes object creation more explicit?
- In which version can forgetting `new` cause a problem?
- Where does each method actually live?
- What does `hasOwnProperty` report for inherited methods?
- Why is `Object.create(Animal.prototype)` preferable to `new Animal()` when
  constructing a child prototype?

