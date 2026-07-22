# Lesson 3: Dependent Promises

## Learning goals

- chain two operations when the second depends on the first;
- return a promise from a `then` handler;
- explain how the returned promise delays the next handler;
- handle failures from either request in one `catch`.

## Compare the shapes

Callback version:

```js
getJson(characterUrl, function (error, character) {
  getJson(character.homeworld, function (error, planet) {
    // use planet
  });
});
```

Promise version:

```js
getJson(characterUrl)
  .then(function (character) {
    return getJson(character.homeworld);
  })
  .then(function (planet) {
    // use planet
  })
  .catch(handleError);
```

## The essential `return`

`then` always returns a new promise. When its handler returns another promise,
the new promise follows that returned promise. Therefore the second `then`
waits for the homeworld request and receives its planet.

If students remove `return`, the handler returns `undefined`. The next `then`
runs too early and receives `undefined`; the homeworld request continues in the
background, disconnected from the chain. This is the most important experiment
in the lesson.

## One error path

A rejection skips fulfillment handlers until a rejection handler is found. The
single `catch` therefore handles character-request errors, planet-request errors,
JSON parsing errors, and errors thrown inside either `then` handler.

## Exercise

Add a third dependent request: use the first URL in `character.films`, load that
film, and display its title. First draw the chain on paper and identify exactly
which promise each handler must return.

## Key takeaway

Returning a promise from a handler connects asynchronous steps into one chain.
Do not nest the next `then`; return the next promise.
