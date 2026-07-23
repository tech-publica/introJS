# Learning Checklist

- [ ] I can make a GET request with `fetch`.
- [ ] I understand that `fetch` starts the request and returns a promise immediately.
- [ ] I know that the first fulfilled value is a `Response`, not parsed JSON.
- [ ] I understand that `response.json()` returns another promise.
- [ ] I can return the JSON promise so its value flows to the next `then`.
- [ ] I can explain why Fetch usually does not reject for a `404` or `500`.
- [ ] I can check `response.ok` and throw an HTTP error.
- [ ] I can handle network, HTTP, and parsing failures with `catch`.

You are ready to continue when you can trace both promises—the response promise
and the JSON promise—through the chain.
