const API_URL = "https://swapi.dev/api/people/1/";
const startButton = document.getElementById("startButton");
const counterButton = document.getElementById("counterButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

let count = 0;

startButton.addEventListener("click", runDemonstration);

counterButton.addEventListener("click", function () {
  count += 1;
  counterButton.textContent = `Counter: ${count}`;
});

async function getCharacter() {
  addStep("2. getCharacter starts the Fetch request");

  const response = await fetch(API_URL);
  addStep("4. The response arrived");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const character = await response.json();
  addStep("5. The JSON body was parsed");
  return character;
}

function runDemonstration() {
  steps.replaceChildren();
  status.textContent = "Loading—try clicking the counter...";
  result.textContent = "Waiting for SWAPI...";
  startButton.disabled = true;

  addStep("1. Before calling getCharacter");

  const characterPromise = getCharacter();

  addStep("3. getCharacter returned a promise; other code continues");
  console.log("Returned immediately:", characterPromise);

  characterPromise
    .then(function (character) {
      addStep(`6. The returned promise fulfills with: ${character.name}`);
      status.textContent = "Finished";
      result.textContent = `Character: ${character.name}`;
    })
    .catch(function (error) {
      status.textContent = "Failed";
      result.textContent = error.message;
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
