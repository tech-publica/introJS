const steps = document.getElementById("steps");
document.getElementById("successButton").addEventListener("click", runSuccess);
document.getElementById("failureButton").addEventListener("click", runFailure);

function runSuccess() {
  reset();
  const firstPromise = Promise.resolve(10);
  const secondPromise = firstPromise.then(function (number) {
    addStep(`First handler receives ${number} and returns ${number * 2}`);
    return number * 2;
  });

  addStep(`then returned a different promise: ${firstPromise !== secondPromise}`);

  secondPromise
    .then(function (number) {
      addStep(`Next handler receives ${number}`);
      return `Final value: ${number}`;
    })
    // Passing addStep directly is shorthand for:
    // .then(function (value) {
    //   addStep(value);
    // });
    .then(addStep);
}

function runFailure() {
  reset();

  Promise.resolve("start")
    .then(function () {
      addStep("First handler throws an Error");
      throw new Error("Something went wrong");
    })
    .then(function () {
      addStep("This fulfillment handler is skipped");
    })
    .catch(function (error) {
      addStep(`catch receives: ${error.message}`);
      return "a recovered value";
    })
    .then(function (value) {
      addStep(`The chain continues with ${value}`);
    });
}

function reset() {
  steps.replaceChildren();
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
