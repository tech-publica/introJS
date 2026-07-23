# Exercise 8: Async/Await Capstone

**Suggested time:** 35 minutes

## Task

Complete the page using `async` and `await`.

### Part 1: `getJson`

Make it an async function that:

1. awaits `fetch(url)`;
2. checks `response.ok`;
3. awaits and returns the parsed JSON.

### Part 2: `loadMission`

Make it an async function that:

1. disables the controls and clears the previous result;
2. chooses the valid or invalid character URL;
3. uses `try` to await the character;
4. awaits the dependent homeworld;
5. starts the character's first three film requests together;
6. awaits their combined result with `Promise.all`;
7. displays the character, homeworld, and film titles;
8. handles errors in `catch`;
9. re-enables the controls in `finally`.

## Acceptance criteria

- The success option displays Luke, Tatooine, and three films.
- The failure option displays `HTTP error: 404`.
- Controls are restored after either outcome.
- The planet request starts only after the character arrives.
- All three film requests start together.
- No `.then`, `.catch`, or `.finally` calls are used in your implementation.

## Questions

1. What promise does `getJson` return?
2. Why are the character and planet awaits sequential?
3. Why should the film requests use `Promise.all`?
4. How does a thrown HTTP error reach `catch`?
5. What work belongs in `finally`?

## Stretch goals

1. Record and display the total elapsed time.
2. Display each film as soon as it arrives while still preserving final input
   order.
3. Use `Promise.allSettled` so one failed film does not hide successful films.

## Hints

- Store `character.films.slice(0, 3)` in a variable.
- Map those URLs to `getJson(url)` calls before awaiting `Promise.all`.
- `try/catch/finally` surrounds the awaited operations, not the event listener.
