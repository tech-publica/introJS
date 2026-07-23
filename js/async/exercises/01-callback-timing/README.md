# Exercise 1: Callback Timing

**Suggested time:** 20 minutes

## Task

Complete `delayedValue(value, delay, callback)`. It must wait for `delay`
milliseconds and then invoke `callback` with `value`.

Do not return the value from the timer callback. Deliver it through the callback
parameter.

## Expected output

```text
1. Before delayedValue
2. delayedValue started
3. After delayedValue
4. Callback received: JavaScript
```

## Questions

1. Why does message 3 appear before message 4?
2. Who calls the callback?
3. What does `delayedValue` return immediately?
4. Would changing the delay to zero make the callback synchronous?

## Stretch goal

Call `delayedValue` a second time with a shorter delay. Predict the complete
output order before running it.

## Hints

- `setTimeout` accepts a callback and a delay.
- The timer callback should invoke the callback supplied to `delayedValue`.
