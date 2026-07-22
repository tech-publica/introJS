# Learning Checklist

- [ ] I can explain why the homeworld request cannot start first.
- [ ] I can return the homeworld promise from the first `then` handler.
- [ ] I understand that every call to `then` returns a new promise.
- [ ] I can explain why returning a promise makes the next handler wait for it.
- [ ] I can identify the value received by each fulfillment handler.
- [ ] I can explain what the next handler receives if the `return` is removed.
- [ ] I can explain why one `catch` handles failures from either request.
- [ ] I can compare the promise chain with the earlier callback pyramid.

The essential test is explaining the `return` before `getJson(character.homeworld)`
without relying on the rule “because promise chains need it.”
