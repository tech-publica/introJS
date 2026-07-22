# Lesson 1: Async and Await Fundamentals

## Learning goals

Use `LEARNING-CHECKLIST.md` before and after this lesson. The central goals are
to understand what an async function returns and what `await` actually pauses.

## 1. An async function always returns a promise

The `async` keyword changes the function's return contract:

```js
async function answer() {
  return 42;
}

const result = answer();
console.log(result); // A promise, not 42
```

The ordinary returned value becomes the fulfillment value of the promise:

```js
answer().then(function (value) {
  console.log(value); // 42
});
```

This remains true even if the function contains no `await`. Calling an async
function always returns a promise.

## 2. Awaiting a promise

Inside an async function, `await` can obtain a promise's fulfillment value:

```js
async function getMessage() {
  const message = await waitForMessage();
  return message.toUpperCase();
}
```

When execution reaches `await`:

1. `waitForMessage()` produces a promise;
2. `getMessage` pauses and returns its own pending promise;
3. JavaScript outside `getMessage` continues running;
4. when the awaited promise fulfills, `getMessage` resumes;
5. its returned string fulfills the promise returned by `getMessage`.

The word “pause” applies only to the current invocation of the async function.
The counter remains clickable because the browser's main thread is not blocked.

## 3. Async/await still uses promises

These forms express the same basic dependency:

```js
waitForMessage().then(function (message) {
  console.log(message);
});
```

```js
async function showMessage() {
  const message = await waitForMessage();
  console.log(message);
}
```

`await` does not convert asynchronous work into synchronous work. It provides a
more sequential-looking way to write code that still uses promises.

## 4. Predict the demonstration

Before clicking, predict the numbered order. Pay special attention to message 3:
it appears while `getMessage` is waiting. Click the counter during the wait to
prove that the page remains responsive.

## Key takeaway

An async function always returns a promise. `await` pauses that async function
until a promise settles while allowing unrelated JavaScript to continue.
