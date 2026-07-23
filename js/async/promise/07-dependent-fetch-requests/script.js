const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacterAndHomeworld);

function getJson(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  });
}

function loadCharacterAndHomeworld() {
  let loadedCharacter;

  loadButton.disabled = true;
  status.textContent = "Loading...";
  steps.replaceChildren();
  result.textContent = "Waiting...";
  addStep("1. Requesting the character...");

  getJson(CHARACTER_URL)
    .then(function (character) {
      loadedCharacter = character;
      addStep(`2. Received ${character.name}.`);
      addStep(`3. Requesting ${character.name}'s homeworld...`);

      // This URL is only known after the character response arrives.
      // Returning its promise connects the second request to the chain.
      return getJson(character.homeworld);
    })
    .then(function (planet) {
      addStep(`4. Received ${planet.name}.`);
      status.textContent = "Finished";
      result.textContent = [
        `Character: ${loadedCharacter.name}`,
        `Homeworld: ${planet.name}`,
        `Climate: ${planet.climate}`,
      ].join("\n");
    })
    .catch(function (error) {
      status.textContent = "Failed";
      result.textContent = error.message;
    })
    .finally(function () {
      loadButton.disabled = false;
    });
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
}
