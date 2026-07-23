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

## 2. Awaiting Fetch promises

`fetch` returns a promise for a `Response`. `response.json()` returns a second
promise for the parsed body. Both can be awaited:

```js
async function getCharacter() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const character = await response.json();
  return character;
}
```

When execution reaches `await`:

1. `fetch()` produces a promise;
2. `getCharacter` pauses and returns its own pending promise;
3. JavaScript outside `getCharacter` continues running;
4. when the response arrives, `getCharacter` resumes;
5. it pauses again while `response.json()` reads and parses the body;
6. the returned character fulfills the promise returned by `getCharacter`.

The word “pause” applies only to the current invocation of the async function.
The counter remains clickable because the browser's main thread is not blocked.

## 3. Async/await still uses promises

These forms express the same basic dependency:

```js
fetch(API_URL).then(function (response) {
  return response.json();
});
```

```js
async function getCharacter() {
  const response = await fetch(API_URL);
  return response.json();
}
```

`await` does not convert asynchronous work into synchronous work. It provides a
more sequential-looking way to write code that still uses promises.

## 4. Predict the demonstration

Before clicking, predict the numbered order. Pay special attention to message 3:
it appears while `getCharacter` is waiting. Click the counter during the wait to
prove that the page remains responsive.

## Key takeaway

An async function always returns a promise. `await` lets it consume Fetch's
response and body promises without blocking unrelated JavaScript.
