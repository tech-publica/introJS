const startButton = document.getElementById("startButton");
const outcome = document.getElementById("outcome");
const status = document.getElementById("status");
const steps = document.getElementById("steps");

startButton.addEventListener("click", demonstratePromise);

function demonstratePromise() {
  steps.replaceChildren();
  startButton.disabled = true;
  outcome.disabled = true;

  addStep("1. Before creating the promise");

  const futureMessage = new Promise(function (resolve, reject) {
    // The executor runs immediately and synchronously.
    addStep("2. The promise executor runs immediately");
    status.textContent = "Promise state: pending";

    setTimeout(function () {
      if (outcome.value === "fulfill") {
        resolve("The future value has arrived");
        // A promise ignores later attempts to settle it.
        reject(new Error("This second settlement is ignored"));
      } else {
        reject(new Error("The operation could not produce a value"));
        resolve("This second settlement is ignored");
      }
    }, 1500);
  });

  addStep("3. new Promise returned a promise object");
  console.log("Promise available now:", futureMessage);

  futureMessage
    .then(function (message) {
      status.textContent = "Promise state: fulfilled";
      addStep(`5. Fulfillment handler received: ${message}`);
    })
    .catch(function (error) {
      status.textContent = "Promise state: rejected";
      addStep(`5. Rejection handler received: ${error.message}`);
    })
    .finally(function () {
      addStep("6. finally runs after either outcome");
      startButton.disabled = false;
      outcome.disabled = false;
    });

  // Registering handlers does not stop this function.
  addStep("4. Handlers registered; synchronous code continues");
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
