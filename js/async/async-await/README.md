# Async and Await

This four-lesson series continues from the promise and Fetch lessons in
`js/async/promise`. `async` and `await` do not replace promises or Fetch: they
provide another way to consume and compose Fetch's promises.

## Lesson sequence

```text
async-await/
├── 01-async-await-fundamentals/
├── 02-dependent-requests/
├── 03-error-handling/
└── 04-sequential-and-parallel/
```

1. **Fundamentals:** async functions, awaiting Fetch's response and JSON
   promises, and what `await` pauses.
2. **Dependent requests:** rewriting the character → homeworld promise chain
   with `await`.
3. **Error handling:** handling rejected awaited promises with `try`, `catch`,
   and `finally`.
4. **Sequential and parallel work:** choosing between consecutive Fetch
   requests and starting independent requests together with `Promise.all`.

Every lesson contains a `LEARNING-CHECKLIST.md`. Students should read it before
the lesson and revisit it afterward. They should be able to explain each item in
their own words or demonstrate it with a small code change—not merely recognize
the terminology.

## Running the examples

In VS Code, right-click the lesson's `index.html` and select **Open with Live
Server**. Begin with `01-async-await-fundamentals/index.html`.

Keep the browser console open and ask students to predict the numbered output
before clicking a button.
