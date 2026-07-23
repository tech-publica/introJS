const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacterAndHomeworld);

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

async function loadCharacterAndHomeworld() {
  loadButton.disabled = true;
  status.textContent = "Loading...";
  steps.replaceChildren();
  result.textContent = "Waiting...";

  addStep("1. Requesting the character...");
  const character = await getJson(CHARACTER_URL);

  addStep(`2. Received ${character.name}.`);
  addStep(`3. Requesting ${character.name}'s homeworld...`);
  const planet = await getJson(character.homeworld);

  addStep(`4. Received ${planet.name}.`);
  status.textContent = "Finished";
  result.textContent = [
    `Character: ${character.name}`,
    `Homeworld: ${planet.name}`,
    `Climate: ${planet.climate}`,
    `Population: ${planet.population}`,
  ].join("\n");
  loadButton.disabled = false;
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
