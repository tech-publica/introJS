# Learning Checklist

- [ ] I understand that `then` and `catch` each return a new promise.
- [ ] I can predict the next promise when a handler returns an ordinary value.
- [ ] I can predict the next promise when a handler returns another promise.
- [ ] I can predict the next promise when a handler throws an error.
- [ ] I know that a handler with no return value implicitly returns `undefined`.
- [ ] I can trace a rejection as it skips fulfillment handlers.
- [ ] I can explain how returning a value from `catch` recovers the chain.
- [ ] I can explain how throwing from `catch` keeps the chain rejected.
- [ ] I understand why `.then(addStep)` can pass the fulfilled value directly.

You are ready to continue when you can apply the four handler-outcome rules to a
new chain without running it first.
