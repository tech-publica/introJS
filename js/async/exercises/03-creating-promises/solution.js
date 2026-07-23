function delay(value, milliseconds, shouldFail) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error("Delayed operation failed"));
        return;
      }

      resolve(value);
    }, milliseconds);
  });
}

const successPromise = delay("Promise fulfilled", 1000, false);
console.log("Returned immediately:", successPromise);

successPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.error(error.message);
  });

delay("This value will not be used", 1500, true)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.error(error.message);
  });
