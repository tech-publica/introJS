const sequentialButton = document.getElementById("sequentialButton");
const parallelButton = document.getElementById("parallelButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

sequentialButton.addEventListener("click", runSequentially);
parallelButton.addEventListener("click", runInParallel);

function simulateOperation(name) {
  addStep(`${name} started`);

  return new Promise(function (resolve) {
    setTimeout(function () {
      addStep(`${name} finished`);
      resolve(`${name} result`);
    }, 2000);
  });
}

async function runSequentially() {
  preparePage("Running sequentially...");
  const startTime = performance.now();

  const firstResult = await simulateOperation("Operation A");
  const secondResult = await simulateOperation("Operation B");

  showResults(firstResult, secondResult, startTime);
}

async function runInParallel() {
  preparePage("Running in parallel...");
  const startTime = performance.now();

  const [firstResult, secondResult] = await Promise.all([
    simulateOperation("Operation A"),
    simulateOperation("Operation B"),
  ]);

  showResults(firstResult, secondResult, startTime);
}

function preparePage(message) {
  sequentialButton.disabled = true;
  parallelButton.disabled = true;
  status.textContent = message;
  steps.replaceChildren();
  result.textContent = "Waiting...";
}

function showResults(firstResult, secondResult, startTime) {
  const elapsedSeconds = ((performance.now() - startTime) / 1000).toFixed(1);

  status.textContent = "Finished";
  result.textContent = [
    firstResult,
    secondResult,
    `Elapsed time: approximately ${elapsedSeconds} seconds`,
  ].join("\n");
  sequentialButton.disabled = false;
  parallelButton.disabled = false;
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
