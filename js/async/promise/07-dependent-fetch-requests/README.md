# Lesson 7: Dependent Fetch Requests

## Learning goals

- make a second Fetch request whose URL comes from the first response;
- recognize why dependent requests cannot start together;
- return the second request's promise from a `then` handler;
- use one `catch` to handle failure in either Fetch request;
- compare this Fetch chain with the promisified XHR chain from lesson 3.

## The familiar dependency

This lesson returns to the character and homeworld scenario:

```text
GET /people/1/             → Luke Skywalker and his homeworld URL
    GET Luke's homeworld   → Tatooine
```

The planet request cannot begin at the same time as the character request. Its
URL is stored in `character.homeworld`, which is not available until the first
response has been received and parsed.

## A reusable Fetch helper

As in lesson 6, `getJson` transforms Fetch's response promise into a promise for
parsed JSON:

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

The page can now compose requests without repeating the response check and JSON
parsing steps.

## Connecting the requests

The same promise-chaining rule learned with XHR still applies:

```js
getJson(CHARACTER_URL)
  .then(function (character) {
    return getJson(character.homeworld);
  })
  .then(function (planet) {
    console.log(planet.name);
  })
  .catch(handleError);
```

Returning the homeworld promise makes the promise created by the first `then`
follow it. The next handler therefore waits and receives the parsed planet.

Fetch changes how each request is created; it does not change how dependent
promises are composed.

## Why not Promise.all?

`Promise.all` is appropriate when every operation can start immediately. Here,
only `CHARACTER_URL` is known at the beginning. We cannot create the homeworld
promise until the character has supplied its URL.

This differs from lesson 8, where all three character URLs are known in advance
and the requests can start together.

## Exercise

1. Compare this script with lesson 3 and identify the code that changed.
2. Remove `return` before `getJson(character.homeworld)` and predict what the
   next handler receives.
3. Change `CHARACTER_URL` to an invalid person URL and observe the error path.
4. Extend the chain with a third request using the first URL in
   `loadedCharacter.films`, then display the film title.

## Key takeaway

Data dependencies determine the shape of asynchronous code. When one Fetch
request needs a URL from an earlier result, return its promise from the handler
to connect the requests into one chain.
