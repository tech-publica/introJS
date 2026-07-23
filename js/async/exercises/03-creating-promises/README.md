# Exercise 3: Creating Promises

**Suggested time:** 25 minutes

## Task

Complete `delay(value, milliseconds, shouldFail)`.

It must immediately return a new promise. After the delay:

- fulfill with `value` when `shouldFail` is false;
- reject with an `Error("Delayed operation failed")` when it is true.

Use the supplied consumers to test both outcomes.

## Questions

1. When is the promise object returned?
2. When does it settle?
3. What is the difference between `resolve(value)` and `return value` inside the
   `setTimeout` callback?
4. Can calling `resolve` again change a settled promise?

## Stretch goal

Reject when `milliseconds` is negative, without starting a timer.

## Hints

- Return `new Promise(function (resolve, reject) { ... })`.
- Put the settlement decision inside `setTimeout`.
- Reject with an `Error`, not a plain string.
