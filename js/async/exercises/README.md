# Asynchronous JavaScript Practice Workshop

## Schedule

This workshop is designed for independent work from **14:00 to 18:00**.

| Time | Exercise | Topic |
| --- | --- | --- |
| 14:00–14:20 | 1 | Callback timing and execution order |
| 14:20–14:50 | 2 | Error-first callbacks and dependent work |
| 14:50–15:15 | 3 | Creating promises |
| 15:15–15:45 | 4 | Consuming and chaining promises |
| 15:45–16:15 | 5 | Dependent and independent promises |
| 16:15–16:25 | Break | Step away from the screen |
| 16:25–16:50 | 6 | Fetch fundamentals |
| 16:50–17:25 | 7 | Dependent and parallel Fetch requests |
| 17:25–18:00 | 8 | Async/await capstone |

The times are guides, not deadlines. If an exercise takes longer, complete its
core requirements and leave the stretch goals for later.

## How to work

1. Read the exercise's `README.md`.
2. Predict the result before running any starter code.
3. Work only in `exercise.js`.
4. Test after every small change.
5. Use the hints only after spending at least five focused minutes on a problem.
6. Open `solution.js` only after the core requirements work or you are genuinely
   stuck.
7. Compare your solution with the provided one and explain any differences.

The goal is not merely to obtain the expected output. You should be able to
explain when each asynchronous operation starts, what promise or callback
represents its result, and how errors travel through the program.

## Running exercises 1–5

Run the Node exercises from the project root:

```sh
node js/async/exercises/01-callback-timing/exercise.js
```

Replace the directory name for the exercise you are working on.

## Running exercises 6–8

Exercises 6–8 run in the browser. In VS Code:

1. Open the exercise directory.
2. Right-click its `index.html`.
3. Select **Open with Live Server**.
4. Keep the browser console and Network panel open.

Begin with `06-fetch-fundamentals/index.html`, then repeat these steps for
exercises 7 and 8. Live Server supplies the local HTTP environment required by
the browser exercises.

## Getting help without giving up the problem

When asking for help, bring three things:

- the requirement you are trying to satisfy;
- the result you expected;
- the result or error you actually received.

Before asking “What is wrong?”, try to identify whether the problem concerns:

- when an operation starts;
- what value a callback receives;
- what promise a function returns;
- a missing `return`;
- a rejected promise;
- an HTTP response that is not successful;
- JSON parsing;
- dependent versus independent operations.

## Completion checklist

- [ ] I can pass data and errors through callbacks.
- [ ] I can create a promise and settle it exactly once.
- [ ] I can consume promises with `then`, `catch`, and `finally`.
- [ ] I can return values and promises through a chain.
- [ ] I can choose between chaining and `Promise.all`.
- [ ] I can make and validate a Fetch request.
- [ ] I can use `async`, `await`, `try`, `catch`, and `finally`.
- [ ] I can explain whether several requests run sequentially or concurrently.
