# Lesson 2: Promisifying XHR

## Learning goals

- convert a callback-based operation into a promise-returning function;
- connect success to `resolve` and failure to `reject`;
- keep promise creation separate from promise consumption;
- recognize that `getJson()` returns before the request finishes.

## From callback to promise

The earlier helper received a callback:

```js
function getJson(url, callback) {
  // Later: callback(null, data) or callback(error)
}
```

The new contract returns a promise:

```js
function getJson(url) {
  return new Promise(function (resolve, reject) {
    // Later: resolve(data) or reject(error)
  });
}
```

The XHR events have not disappeared. A promise wraps that existing callback API
and exposes one consistent future outcome. This conversion is often called
**promisifying** an API.

## Creation and consumption

`getJson` creates and returns the promise. `loadCharacter` consumes it:

```js
getJson(API_URL)
  .then(showCharacter)
  .catch(showError);
```

Keeping those responsibilities separate makes `getJson` reusable. It knows how
to obtain JSON, but it does not know how a particular page will display it.

## Map every outcome

Discuss how each XHR outcome settles the promise:

- successful HTTP response and valid JSON → `resolve(data)`;
- unsuccessful HTTP status → `reject(new Error(...))`;
- invalid JSON → `reject(error)`;
- network failure → `reject(new Error(...))`.

Merely receiving an XHR `load` event does not guarantee HTTP success, so the
status check is still required.

## Exercise

Temporarily change the URL to `/people/999999/` and observe which handler runs.
Then restore it and explain why `finally` is a suitable place to re-enable the
button.

## Key takeaway

A promise does not make XHR asynchronous—it already was asynchronous. The
promise gives its eventual success or failure a composable interface.
