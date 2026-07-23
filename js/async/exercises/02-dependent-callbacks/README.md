# Exercise 2: Dependent Callbacks

**Suggested time:** 30 minutes

## Task

The simulated database contains users and their favorite films.

1. Complete `findUser(id, callback)`.
2. Complete `findFilm(id, callback)`.
3. Use the error-first callback convention: `callback(error, value)`.
4. Complete `showFavoriteFilm(userId)` so it loads the user first and then uses
   `user.favoriteFilmId` to load the film.
5. Stop and display the error if either lookup fails.

## Expected success output

```text
Loading user...
User: Ada
Loading favorite film...
Favorite film: A New Hope
```

Change the final call to `showFavoriteFilm(999)` to test the error path.

## Questions

1. Why can the film lookup not begin at the same time as the user lookup?
2. Why should each callback return immediately after handling an error?
3. Where does callback nesting begin to reduce readability?

## Stretch goal

Add a third dependent lookup for the film's director.

## Hints

- Use `setTimeout` to simulate each lookup.
- `users[id]` is `undefined` when an ID does not exist.
- The second lookup belongs inside the successful user callback.
