# Lesson 5: Independent Promises with Promise.all

## Learning goals

- distinguish dependent from independent asynchronous operations;
- start independent operations without waiting for each other;
- combine their promises with `Promise.all`;
- explain ordered results and fail-fast rejection.

## Dependency determines the structure

The homeworld request in lesson 3 was dependent: its URL came from the character
response. These three character URLs are known from the start, so all requests
can begin immediately:

```js
const characterPromises = urls.map(function (url) {
  return getJson(url);
});

Promise.all(characterPromises).then(function (characters) {
  // All characters are available here.
});
```

`map` immediately calls `getJson` for every URL. `Promise.all` returns one new
promise. It fulfills when every input fulfills, with an array of their values.

## Two important rules

1. Result values retain the input order, even if requests finish in another
   order.
2. If any input rejects, the combined promise rejects immediately with that
   reason. Other requests are not automatically cancelled.

## Exercise

Add `/people/4/` and verify that the result order follows `URLS`. Then introduce
one invalid URL and observe that no partial results reach the fulfillment
handler. Discuss when an application might instead need `Promise.allSettled`;
using that method can remain an extension rather than part of the core lesson.

## Key takeaway

Chain operations that depend on earlier results. Start independent operations
together and use `Promise.all` when all must succeed before continuing.
