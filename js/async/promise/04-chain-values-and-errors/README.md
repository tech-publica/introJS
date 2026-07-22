# Lesson 4: Values and Errors Through a Chain

## Learning goals

- explain that `then` and `catch` each return a new promise;
- trace ordinary returned values through a chain;
- trace thrown errors and rejections through a chain;
- explain how `catch` can either recover or keep the chain rejected.

## Every link is a new promise

```js
const first = Promise.resolve(10);
const second = first.then(double);

console.log(first === second); // false
```

The outcome of `second` depends on what `double` does:

| Handler outcome | New promise outcome |
| --- | --- |
| returns an ordinary value | fulfilled with that value |
| returns a promise | follows that promise |
| throws an error | rejected with that error |
| returns nothing | fulfilled with `undefined` |

This table is the rule system behind promise chaining.

## Rejection propagation

A rejection moves past fulfillment handlers until the chain finds a rejection
handler. `catch(handler)` is shorthand for `then(undefined, handler)`.

If a `catch` handler returns an ordinary value, the promise it creates is
fulfilled: the chain has recovered. If it throws or returns a rejected promise,
the chain remains rejected.

## Exercises

1. Change the first successful value from `10` to `7` and predict every result.
2. Remove the return from the first handler. What does the next handler receive?
3. In `catch`, replace the returned string with `throw error`. Which later
   handlers run?
4. Add `finally`. Verify that its callback receives neither the value nor error
   and normally leaves the outcome unchanged.

## Key takeaway

A promise chain is a sequence of new promises. What each handler returns or
throws determines the outcome of the next link.
