# Lesson 8: Fetch and Promise.all

## Learning goals

- build a reusable Fetch helper that returns parsed JSON;
- start several independent Fetch requests together;
- combine Fetch promises with `Promise.all`;
- compare Fetch with the promisified XHR implementation from lesson 5;
- preserve HTTP error handling in every request.

## A Fetch-based getJson helper

Lesson 5 needed to create a promise and connect XHR events to `resolve` and
`reject`. Fetch already returns a promise, so `getJson` only needs to transform
its response:

```js
function getJson(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  });
}
```

Because a `then` call returns a new promise, `getJson` returns a promise for the
parsed JSON. It hides the two Fetch steps from the code that uses it.

## Starting independent requests

As in lesson 5, the URLs are all known before any response arrives:

```js
const characterPromises = URLS.map(function (url) {
  return getJson(url);
});

Promise.all(characterPromises).then(function (characters) {
  // All three parsed character objects are available.
});
```

`map` starts all three requests immediately. Each `getJson` call returns one
promise, and `Promise.all` combines them.

The `Promise.all` rules have not changed:

1. results retain the same order as `URLS`;
2. the combined promise fulfills only after every request and JSON parse
   succeeds;
3. it rejects when any input promise rejects;
4. one rejection does not automatically cancel the other Fetch requests.

## Compare lessons 5 and 7

The page behavior and `Promise.all` code are intentionally almost identical.
Only the implementation of `getJson` changes. XHR needs a manually constructed
promise and event handlers; Fetch gives us a promise-based starting point.

This comparison also demonstrates that `Promise.all` is not specific to Fetch
or XHR. It works with promises regardless of how they were created.

## Exercise

1. Open lessons 5 and 7 side by side and compare their `getJson` functions.
2. Add `/people/4/` and confirm that output order follows `URLS`.
3. Change one URL to `/people/999999/` and observe the fail-fast result.
4. Explain why the `response.ok` check must happen inside every `getJson` call.

## Key takeaway

Fetch removes the manual promise wrapper required by XHR. Once each request is
represented by a promise for parsed JSON, the same composition tools—including
`Promise.all`—work exactly as before.
