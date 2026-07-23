const CHARACTER_URLS = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
  "https://swapi.dev/api/people/3/",
];
const sequentialButton = document.getElementById("sequentialButton");
const parallelButton = document.getElementById("parallelButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

sequentialButton.addEventListener("click", runSequentially);
parallelButton.addEventListener("click", runInParallel);

async function getJson(url, label) {
  addStep(`${label} request started`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const character = await response.json();
  addStep(`${label} received: ${character.name}`);
  return character;
}

async function runSequentially() {
  preparePage("Running sequentially...");
  const startTime = performance.now();

  try {
    const characters = [];

    for (let index = 0; index < CHARACTER_URLS.length; index += 1) {
      const character = await getJson(
        CHARACTER_URLS[index],
        `Request ${index + 1}`,
      );
      characters.push(character);
    }

    showResults(characters, startTime);
  } catch (error) {
    showError(error);
  } finally {
    enableButtons();
  }
}

async function runInParallel() {
  preparePage("Running in parallel...");
  const startTime = performance.now();

  try {
    const characterPromises = CHARACTER_URLS.map(function (url, index) {
      return getJson(url, `Request ${index + 1}`);
    });
    const characters = await Promise.all(characterPromises);

    showResults(characters, startTime);
  } catch (error) {
    showError(error);
  } finally {
    enableButtons();
  }
}

function preparePage(message) {
  sequentialButton.disabled = true;
  parallelButton.disabled = true;
  status.textContent = message;
  steps.replaceChildren();
  result.textContent = "Waiting...";
}

function showResults(characters, startTime) {
  const elapsedSeconds = ((performance.now() - startTime) / 1000).toFixed(1);

  status.textContent = "Finished";
  result.textContent = [
    ...characters.map(function (character) {
      return character.name;
    }),
    `Elapsed time: ${elapsedSeconds} seconds`,
  ].join("\n");
}

function showError(error) {
  status.textContent = "Failed";
  result.textContent = error.message;
}

function enableButtons() {
  sequentialButton.disabled = false;
  parallelButton.disabled = false;
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
