# Vintage Style: Constructor Functions

Before `class` syntax, constructor functions were a common way to organize object
creation and inheritance.

This example has three separate operations:

1. `Dog` calls `Animal.call(this, ...)` to initialize parent-owned data on the
   current dog object.
2. `Dog.prototype = Object.create(Animal.prototype)` connects method lookup from
   dogs to the animal prototype.
3. `Dog.prototype.constructor = Dog` restores the conventional `constructor`
   reference replaced by step 2.

Calling the parent constructor does **not** establish inheritance by itself. It
only runs `Animal` with the dog's `this`. The `Object.create` line establishes
the prototype chain.

Do not use `Dog.prototype = new Animal()` to establish inheritance. It executes
initialization while constructing a prototype and may create unwanted shared
state or side effects.

Run the files with:

```sh
node js/oo/00-prototypes-without-classes/vintage/demo.js
node js/oo/00-prototypes-without-classes/vintage/exercise.js
node js/oo/00-prototypes-without-classes/vintage/solution.js
```

