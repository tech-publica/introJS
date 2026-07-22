# Lesson 1: Promise Fundamentals

## Learning goals

By the end of this lesson, students should be able to:

- describe a promise as an object representing a future result;
- distinguish a promise from the value it eventually produces;
- name the `pending`, `fulfilled`, and `rejected` states;
- explain that fulfillment and rejection are the two forms of settlement;
- use `then`, `catch`, and `finally` to register handlers;
- predict the broad execution order of the executor, synchronous code, and handlers.

## 1. Begin with the problem

An asynchronous function cannot return a future HTTP response as an ordinary
return value. It finishes before that response exists. A callback solves this by
saying, “call this function later.” A promise gives us an object that represents
the later result:

```text
ordinary value:  the value is available now
promise:         an object is available now; its result may arrive later
```

A promise is not the future value itself. If `futureMessage` is a promise, this
does not extract its value:

```js
const message = futureMessage; // message is still the promise object
```

The result is observed with a handler registered using `then` or `catch`.

## 2. The three states

A promise is always in exactly one of these states:

```text
                  ┌─ fulfilled with a value
pending ──────────┤
                  └─ rejected with a reason
```

Fulfilled and rejected promises are collectively called **settled**. Settlement
is permanent: a promise can change from pending to fulfilled or rejected only
once. Later calls to `resolve` or `reject` have no effect.

Use “fulfilled” rather than “resolved” when naming the successful state.
`resolve` is the function used to determine a promise's eventual outcome; if it
receives another promise, the new promise can remain pending while following it.

## 3. Creating a promise

The `Promise` constructor receives an **executor function**:

```js
const futureMessage = new Promise(function (resolve, reject) {
  // Start some operation.
});
```

JavaScript supplies `resolve` and `reject`. Call `resolve(value)` when the
operation succeeds and `reject(error)` when it fails. Prefer rejecting with an
`Error` object because it carries a message and useful debugging information.

The executor is unusual but important: it runs immediately, while the promise
is being constructed. It does not wait until `then` is called.

## 4. Consuming a promise

```js
futureMessage
  .then(function (value) {
    console.log("Fulfilled:", value);
  })
  .catch(function (error) {
    console.error("Rejected:", error);
  })
  .finally(function () {
    console.log("Settled either way");
  });
```

- `then` registers a fulfillment handler.
- `catch` registers a rejection handler.
- `finally` registers a handler for either outcome; it receives no result.

These methods register callbacks. They do not pause JavaScript and they do not
make the result available outside the handlers.

Promise handlers are always scheduled to run later, after the current
synchronous work finishes—even when the promise is already settled:

```js
console.log("A");

Promise.resolve("ready").then(function () {
  console.log("C");
});

console.log("B");
```

The output is `A`, `B`, `C`. For now, it is enough to describe the handler as a
later job. A later event-loop lesson can introduce the precise term
**microtask** without making it a prerequisite for understanding promises.

## 5. Predict before running

Open the page, choose an outcome, and predict the numbered messages. The key
observations are:

1. the executor runs before `new Promise(...)` returns;
2. registering handlers does not block the click handler;
3. the appropriate handler runs only after the promise settles;
4. `finally` runs for both fulfillment and rejection.

Inspect `futureMessage` in the browser console immediately and again after the
timer completes. Browser displays vary, but its state changes while its identity
does not.

## Check understanding

Ask students:

1. Is a promise the eventual value? Why not?
2. Can a fulfilled promise later become rejected?
3. Who calls the executor, and when?
4. Does `then` stop the statements below it from running?
5. Which handler runs when the promise rejects?

## Key vocabulary

- **Promise:** an object representing the eventual outcome of an operation.
- **Pending:** the initial state; no outcome is available yet.
- **Fulfilled:** settled successfully with a value.
- **Rejected:** settled unsuccessfully with a reason.
- **Settled:** fulfilled or rejected and no longer pending.
- **Executor:** the function passed to `new Promise`, run immediately.
- **Handler:** a callback registered to react to an outcome.
