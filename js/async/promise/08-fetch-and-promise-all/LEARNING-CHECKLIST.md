# Learning Checklist

- [ ] I can write a `getJson` helper using `fetch`.
- [ ] I can explain why `getJson` returns a promise without using `new Promise`.
- [ ] I can explain why the helper returns `response.json()`.
- [ ] I can use `map` to start several independent Fetch requests.
- [ ] I can combine their promises with `Promise.all`.
- [ ] I understand that result order follows input order.
- [ ] I understand the fail-fast behavior when one request or parse fails.
- [ ] I know that one rejection does not automatically cancel other requests.
- [ ] I can compare the Fetch helper with the promisified XHR helper.

You have met the lesson goals when you can replace a promisified XHR operation
with Fetch without changing the promise-composition code that consumes it.
