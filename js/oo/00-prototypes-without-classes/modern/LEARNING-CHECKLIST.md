# Factory and Explicit-Delegation Checklist

- [ ] I can create an object with a factory function instead of `new`.
- [ ] I can separate shared prototype methods from instance data.
- [ ] I can use `Object.create` to select a new object's prototype.
- [ ] I can explain the responsibilities of the initializer and factory functions.
- [ ] I can trace lookup from an instance through both prototype objects.
- [ ] I can use `Object.getPrototypeOf` or `isPrototypeOf` to inspect delegation.
- [ ] I understand why ordinary `instanceof` is less natural for this factory style.
- [ ] I can compare this approach with the vintage constructor-function approach.

You have understood this version when you can create another kind of animal with
shared behavior without using either `class` or `new`.
