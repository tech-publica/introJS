# Lesson 4: Sequential and Parallel Work

## Learning goals

Use `LEARNING-CHECKLIST.md` after running and comparing both demonstrations.

## Sequential operations

Consecutive `await` expressions create a sequence:

```js
for (const url of CHARACTER_URLS) {
  const character = await getJson(url);
  characters.push(character);
}
```

Each Fetch request starts only after the previous request has finished. This is
correct when later work depends on earlier data. It is unnecessary waiting for
these three characters because every URL is known in advance.

Network timing and browser caching vary, so elapsed times are evidence rather
than a guaranteed benchmark. The execution-step list gives the decisive
evidence: in the sequential version, each response arrives before the next
request starts.

## Parallel operations

When neither operation needs the other's result, start both before waiting for
them together:

```js
const characterPromises = CHARACTER_URLS.map(function (url) {
  return getJson(url);
});
const characters = await Promise.all(characterPromises);
```

`map` calls `getJson` for every URL before `Promise.all` is awaited, so all three
Fetch requests begin together. The async function then awaits the combined
promise returned by `Promise.all`.

`Promise.all` keeps input order even if operations finish in a different order.
It rejects if any input promise rejects, as covered in the promise series.

## The decision to teach

Ask one question before choosing a structure:

> Does one operation need the result of another operation before it can start?

- If yes, use sequential `await` expressions.
- If no and all results are required, start them together with `Promise.all`.

## Exercise

Add a fourth SWAPI character URL. Predict the request-start order in both
versions before running them. Then use a character's `homeworld` URL to invent a
dependent request and explain why it cannot begin in the original `Promise.all`.

## Key takeaway

`await` does not automatically make Fetch requests parallel. Dependencies
determine whether requests should run sequentially or start together.
