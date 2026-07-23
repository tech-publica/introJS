# Exercise 5: Composing Promises

**Suggested time:** 30 minutes

## Task A: dependent promises

Use `findUser(1)`, then use the returned user's `favoriteFilmId` to call
`findFilm`. Return the film promise from the first handler and display the film
title in the next handler. Add one `catch` for either failure.

## Task B: independent promises

The IDs `[101, 102, 103]` are all known immediately.

1. Use `map` to create an array of film promises.
2. Combine them with `Promise.all`.
3. Display all titles in input order.
4. Add one `catch`.

## Questions

1. Why does task A require a chain?
2. Why can task B start all operations together?
3. What happens if one film ID is invalid?
4. Does `Promise.all` cancel the remaining operations after a rejection?

## Stretch goal

Try `Promise.allSettled` and display both successful and failed outcomes.

## Hints

- Do not nest the second `then` in task A.
- Return `findFilm(user.favoriteFilmId)`.
- `filmIds.map(findFilm)` would also work because `findFilm` needs one argument.
