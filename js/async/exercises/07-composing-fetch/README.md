# Exercise 7: Composing Fetch Requests

**Suggested time:** 35 minutes

## Preparation

Complete `getJson(url)`. It must:

1. call `fetch`;
2. reject unsuccessful HTTP responses by throwing an error;
3. return parsed JSON.

Use promise chains only. Save `async` and `await` for exercise 8.

## Task A: dependent requests

Complete `loadCharacterAndHomeworld`:

1. load Luke;
2. display his name;
3. return a request for `character.homeworld`;
4. display the planet name;
5. handle errors and re-enable both buttons.

## Task B: independent requests

Complete `loadCharacters`:

1. map `CHARACTER_URLS` to an array of `getJson` promises;
2. combine them with `Promise.all`;
3. display every character name in input order;
4. handle errors and re-enable both buttons.

## Questions

1. Why does task A require chaining?
2. At what exact moment does the planet request start?
3. At what exact moment do the three character requests start?
4. Why can both tasks use the same `getJson` helper?

## Stretch goal

Add a bad URL to `CHARACTER_URLS`. Then replace `Promise.all` with
`Promise.allSettled` and display partial results.

## Hints

- Return `getJson(character.homeworld)` from task A's first handler.
- Calling `map` invokes `getJson` once for every URL immediately.
- Put shared button cleanup in the provided `finish` function.
