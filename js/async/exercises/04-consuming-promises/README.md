# Exercise 4: Consuming and Chaining Promises

**Suggested time:** 30 minutes

## Task

`getScore` is complete. Consume its returned promise without changing it.

Build a chain that:

1. calls `getScore("Leia")`;
2. logs `Initial score: 7`;
3. returns the score multiplied by two;
4. logs `Doubled score: 14`;
5. throws `new Error("Score is too low")` if the doubled score is below 10;
6. catches and logs any error;
7. always logs `Score check complete`.

Test the error path by changing the starting score inside `getScore` from `7`
to `3`.

## Questions

1. What does each `then` call return?
2. How does a returned number reach the next handler?
3. How does a thrown error reach `catch`?
4. Why is the final message placed in `finally`?

## Stretch goal

Add a handler after `catch`. Investigate what value it receives when `catch`
does not return anything.

## Hints

- Return the doubled number from the first handler.
- Throwing inside a handler rejects the promise returned by `then`.
- Attach `finally` at the end of the chain.
