# Learning Checklist

- [ ] I can explain what it means to promisify a callback-based API.
- [ ] I can make `getJson` return a new promise.
- [ ] I can connect successful JSON parsing to `resolve(data)`.
- [ ] I can connect HTTP, parsing, and network failures to `reject(error)`.
- [ ] I understand that an XHR `load` event does not guarantee HTTP success.
- [ ] I can separate promise creation in `getJson` from consumption in the page code.
- [ ] I can explain why the promise returns before the XHR response arrives.
- [ ] I can explain why `finally` is appropriate for re-enabling the button.

You are ready to continue when you can map every possible XHR outcome to exactly
one fulfilled or rejected promise outcome.
