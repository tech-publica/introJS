# Lesson 6: Fetch Fundamentals

## Learning goals

- make an HTTP request with `fetch`;
- recognize that `fetch` returns a promise;
- distinguish receiving a response from reading its JSON body;
- check `response.ok` before using the response;
- return the promise from `response.json()` to continue the chain.

## From promisified XHR to Fetch

In lesson 2, we manually wrapped `XMLHttpRequest` in a promise-returning
`getJson` function. The Fetch API already has a promise-based interface:

```js
const responsePromise = fetch(API_URL);
```

`fetch` starts the request and immediately returns a promise. When that promise
fulfills, its value is a `Response` object—not yet the JavaScript character
object.

## Reading the response body

The response body arrives as a stream. Calling `response.json()` reads that body,
parses its JSON, and returns another promise:

```js
fetch(API_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (character) {
    console.log(character.name);
  });
```

Returning the JSON promise connects it to the chain. The next `then` waits for
that promise and receives the parsed value.

## HTTP errors need an explicit check

Fetch rejects for failures such as a network error. It normally fulfills when an
HTTP response arrives, even if its status is `404` or `500`. Check `response.ok`
and throw an error yourself:

```js
if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}
```

Throwing inside the fulfillment handler rejects the promise returned by `then`,
so the chain skips to `catch`.

## Exercise

1. Predict what each console message contains before loading the character.
2. Change the URL to `/people/999999/`.
3. Observe that Fetch receives a response but the `response.ok` check sends the
   chain to `catch`.
4. Remove `return` from `return jsonPromise` and explain why the next handler
   receives `undefined`.

## Key takeaway

Fetch already returns promises. The first promise produces a response, and
`response.json()` produces another promise for the parsed body. Check HTTP
status explicitly and return each promise that the next step must wait for.
