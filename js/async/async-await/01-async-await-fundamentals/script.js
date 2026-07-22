const startButton = document.getElementById("startButton");
const counterButton = document.getElementById("counterButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");

let count = 0;

startButton.addEventListener("click", runDemonstration);

counterButton.addEventListener("click", function () {
  count += 1;
  counterButton.textContent = `Counter: ${count}`;
});

function waitForMessage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("The awaited value has arrived");
    }, 2000);
  });
}

async function getMessage() {
  addStep("2. getMessage starts");

  const message = await waitForMessage();

  addStep(`4. getMessage continues with: ${message}`);
  return message.toUpperCase();
}

function runDemonstration() {
  steps.replaceChildren();
  status.textContent = "Waiting—try clicking the counter...";
  startButton.disabled = true;

  addStep("1. Before calling getMessage");

  const messagePromise = getMessage();

  addStep("3. getMessage returned a promise; other code continues");
  console.log("Returned immediately:", messagePromise);

  messagePromise
    .then(function (message) {
      addStep(`5. The returned promise fulfills with: ${message}`);
      status.textContent = "Finished";
    })
    .finally(function () {
      startButton.disabled = false;
    });
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
