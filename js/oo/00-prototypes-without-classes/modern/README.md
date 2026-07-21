# Factory Style: Explicit Prototype Delegation

This version creates objects with factory functions instead of constructor
functions. It uses no `class` and no `new`.

The responsibilities are explicit:

- prototype objects contain shared behavior;
- initializer functions assign instance data;
- factory functions create, initialize, and return objects.

`dogPrototype` delegates to `animalPrototype`:

```js
const dogPrototype = Object.create(animalPrototype);
```

Each dog created with `Object.create(dogPrototype)` therefore has access to both
`bark()` and `eat()`.

This style avoids the risk of calling a constructor function without `new`.
However, standard `instanceof` is less natural because the factories are not
constructors with `.prototype` objects. Prototype checks can instead use
`isPrototypeOf` or `Object.getPrototypeOf`.

Run the files with:

```sh
node js/oo/00-prototypes-without-classes/modern/demo.js
node js/oo/00-prototypes-without-classes/modern/exercise.js
node js/oo/00-prototypes-without-classes/modern/solution.js
```

