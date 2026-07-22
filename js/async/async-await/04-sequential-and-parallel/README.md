# Lesson 4: Sequential and Parallel Work

## Learning goals

Use `LEARNING-CHECKLIST.md` after running and comparing both demonstrations.

## Sequential operations

Consecutive `await` expressions create a sequence:

```js
const firstResult = await simulateOperation("Operation A");
const secondResult = await simulateOperation("Operation B");
```

Operation B is not started until operation A has finished. With two operations
lasting about two seconds each, the total is about four seconds.

This is correct when B depends on A. It is unnecessary waiting when they are
independent.

## Parallel operations

When neither operation needs the other's result, start both before waiting for
them together:

```js
const [firstResult, secondResult] = await Promise.all([
  simulateOperation("Operation A"),
  simulateOperation("Operation B"),
]);
```

Both calls happen while the array is being created, so both timers start. The
async function awaits the combined promise returned by `Promise.all`. The total
is about two seconds rather than four.

The destructuring assignment matches the result array:

```js
const [firstResult, secondResult] = results;
```

`Promise.all` keeps input order even if operations finish in a different order.
It rejects if any input promise rejects, as covered in the promise series.

## The decision to teach

Ask one question before choosing a structure:

> Does one operation need the result of another operation before it can start?

- If yes, use sequential `await` expressions.
- If no and all results are required, start them together with `Promise.all`.

## Exercise

Add a third two-second operation. Predict the approximate sequential and
parallel totals before running the examples. Then invent one operation whose
input depends on an earlier result and explain why it cannot join the same
`Promise.all` call.

## Key takeaway

`await` does not automatically make operations parallel. Dependencies determine
whether work should run sequentially or start together.
