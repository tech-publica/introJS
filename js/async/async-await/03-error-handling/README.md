# Lesson 3: Error Handling

## Learning goals

Use `LEARNING-CHECKLIST.md` and test both the fulfilled and rejected paths.

## Rejection behaves like a thrown error at await

When an awaited promise rejects, the async function does not receive a normal
value. From the function's perspective, the `await` expression throws the
rejection reason:

```js
try {
  const character = await getJson(url);
  showCharacter(character);
} catch (error) {
  showError(error);
}
```

If `getJson` rejects, statements after that `await` inside the `try` block are
skipped. Execution jumps to `catch`, just as it would for a synchronously thrown
error.

## Fetch has two kinds of failure

Fetch rejects for failures such as a network problem. An HTTP error response,
such as `404`, normally fulfills the Fetch promise, so the helper must turn it
into a thrown error:

```js
async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}
```

The thrown HTTP error and any rejected Fetch or JSON promise all reach the same
`catch` surrounding `await getJson(url)`.

## Promise-chain comparison

```js
getJson(url)
  .then(showCharacter)
  .catch(showError)
  .finally(enableButton);
```

```js
try {
  const character = await getJson(url);
  showCharacter(character);
} catch (error) {
  showError(error);
} finally {
  enableButton();
}
```

The syntax differs, but the underlying fulfilled and rejected promise outcomes
are the same.

## Why finally is useful

Cleanup such as re-enabling a button must happen whether the operation succeeds
or fails. Placing it in `finally` avoids duplicating the same statements in both
`try` and `catch`.

`finally` does not mean that an error was handled. The `catch` block handles the
error; `finally` performs unconditional cleanup.

## Exercise

Add an instruction immediately after the `await`, then run the failure case and
verify that it is skipped. Add another instruction after the entire
`try/catch/finally` statement and predict whether it runs.

## Key takeaway

A rejected awaited promise acts like a thrown error. Check Fetch HTTP responses,
use `try/catch` to handle failures, and use `finally` for work required after
either outcome.
