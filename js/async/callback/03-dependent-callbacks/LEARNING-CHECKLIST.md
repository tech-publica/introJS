# Learning Checklist

- [ ] I can explain why the homeworld request depends on the character request.
- [ ] I can identify the value from the first response that starts the second request.
- [ ] I can trace the character and planet values through both callbacks.
- [ ] I can explain why the second callback is nested inside the first callback.
- [ ] I can identify the separate error path for each request.
- [ ] I can describe how another dependent operation would increase the nesting.
- [ ] I can explain why this shape is called a callback pyramid.

You are ready for promises when you understand that callbacks work here, but
dependent callbacks become increasingly difficult to compose and read.
