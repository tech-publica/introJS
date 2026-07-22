# Promises

This series continues from `js/async/callback/03-dependent-callbacks`. It solves
the same asynchronous problems with promises before introducing `async` and
`await`.

## Lesson sequence

```text
promise/
├── 01-promise-fundamentals/
├── 02-promisifying-xhr/
├── 03-dependent-promises/
├── 04-chain-values-and-errors/
└── 05-promise-all/
```

1. **Promise fundamentals** separates the promise object from its future result
   and introduces states, settlement, handlers, and execution order.
2. **Promisifying XHR** turns the callback-based `getJson` helper into a function
   that returns a promise.
3. **Dependent promises** replaces the callback pyramid with a promise chain.
4. **Chain values and errors** explains what every call to `then` and `catch`
   returns and how results and failures travel through a chain.
5. **Promise.all** runs independent operations concurrently and combines their
   results.

## Running the examples

Start a local server from the project root:

```sh
python3 -m http.server 8000
```

Then open, for example:

```text
http://localhost:8000/js/async/promise/01-promise-fundamentals/
```

Keep the browser console open. The numbered messages are part of each lesson:
students should predict their order before running an example.

## Teaching approach

Do not begin with `async`/`await`. Students should first understand that:

- a promise is an object available now, not the eventual value;
- a promise settles once, as fulfilled or rejected;
- `then`, `catch`, and `finally` register callbacks rather than pausing JavaScript;
- every call to `then` or `catch` creates and returns a new promise;
- returning a promise connects one asynchronous operation to the next;
- rejection travels down a chain until a rejection handler handles it.

These ideas are the foundation on which `async`/`await` will later build.
