# Vintage Constructor-Function Checklist

- [ ] I can recognize a constructor function by how it is used with `new`.
- [ ] I can explain the main operations performed by `new`.
- [ ] I can place shared methods on `Constructor.prototype`.
- [ ] I can explain what `Parent.call(this, ...)` initializes.
- [ ] I understand that calling the parent constructor does not create inheritance.
- [ ] I can connect child and parent prototypes with `Object.create`.
- [ ] I can explain why the child prototype's `constructor` is restored.
- [ ] I understand why `Child.prototype = new Parent()` is a poor inheritance setup.

You have understood the pattern when you can separately explain instance
initialization and prototype inheritance; they are related but different jobs.
