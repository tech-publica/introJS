# Exercise 6: Fetch Fundamentals

**Suggested time:** 25 minutes

## Task

Complete `loadCharacter` using a promise chain.

1. Fetch Luke Skywalker from `CHARACTER_URL`.
2. Check `response.ok`. Throw an HTTP error containing the status when false.
3. Return the promise from `response.json()`.
4. Display the character's name, height, and birth year.
5. Display errors in the result area.
6. Re-enable the button in `finally`.

Do not use `async` or `await` yet.

## Tests

- The valid URL displays Luke.
- Changing `/people/1/` to `/people/999999/` displays `HTTP error: 404`.
- The button is re-enabled after either outcome.

## Questions

1. What does the promise returned by `fetch` fulfill with?
2. What does `response.json()` return?
3. Why does a `404` require an explicit check?
4. Why must the JSON promise be returned?

## Stretch goal

Display the response's `Content-Type` header before parsing the body.

## Hints

- Start with `fetch(CHARACTER_URL).then(...)`.
- Test `if (!response.ok)`.
- Use a second `then` to receive the parsed character.
