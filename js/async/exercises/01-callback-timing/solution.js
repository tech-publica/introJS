function delayedValue(value, delay, callback) {
  console.log("2. delayedValue started");

  setTimeout(function () {
    callback(value);
  }, delay);
}

console.log("1. Before delayedValue");

delayedValue("JavaScript", 1000, function (value) {
  console.log(`4. Callback received: ${value}`);
});

console.log("3. After delayedValue");
