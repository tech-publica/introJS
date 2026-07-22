# Async and Await

This four-lesson series continues from `js/async/promise`. `async` and `await`
do not replace promises: they provide another way to create, consume, and
compose them.

## Lesson sequence

```text
async-await/
├── 01-async-await-fundamentals/
├── 02-dependent-requests/
├── 03-error-handling/
└── 04-sequential-and-parallel/
```

1. **Fundamentals:** async functions, their returned promises, and what `await`
   pauses.
2. **Dependent requests:** rewriting the character → homeworld promise chain
   with `await`.
3. **Error handling:** handling rejected awaited promises with `try`, `catch`,
   and `finally`.
4. **Sequential and parallel work:** choosing between consecutive `await`
   expressions and `Promise.all`.

Every lesson contains a `LEARNING-CHECKLIST.md`. Students should read it before
the lesson and revisit it afterward. They should be able to explain each item in
their own words or demonstrate it with a small code change—not merely recognize
the terminology.

## Running the examples

Start a local server from the project root:

```sh
python3 -m http.server 8000
```

Then begin at:

```text
http://localhost:8000/js/async/async-await/01-async-await-fundamentals/
```

Keep the browser console open and ask students to predict the numbered output
before clicking a button.
