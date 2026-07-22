# Lesson 2: Dependent Requests

## Learning goals

Use `LEARNING-CHECKLIST.md` to assess whether students understand the dependency,
not only the new syntax.

## From a promise chain to await

The promise version was:

```js
getJson(CHARACTER_URL)
  .then(function (character) {
    return getJson(character.homeworld);
  })
  .then(function (planet) {
    showResult(planet);
  });
```

Inside an async function, the same dependency can be written as:

```js
const character = await getJson(CHARACTER_URL);
const planet = await getJson(character.homeworld);
```

The first `await` produces the character object. The second request needs the
`homeworld` property from that object, so it cannot begin earlier.

## Read the function in stages

```text
request character
       │
       ▼
await character response
       │ read character.homeworld
       ▼
request planet
       │
       ▼
await planet response
       │
       ▼
display both values
```

The code looks sequential because the operations really are dependent. While
each request is pending, only this async function is paused; the browser remains
available for other work.

## An intentional missing piece

This demonstration focuses only on successful dependency. If a request rejects,
execution does not reach the remaining lines and the button stays disabled.
That is intentional motivation for lesson 3, where `try`, `catch`, and `finally`
complete the implementation.

## Exercise

After the planet arrives, load the first URL in `character.films` and display
the film's title. Ask which earlier value supplies that URL and why the request
must be placed after the character has arrived.

## Key takeaway

Use consecutive `await` expressions when a later operation needs data produced
by an earlier operation.
