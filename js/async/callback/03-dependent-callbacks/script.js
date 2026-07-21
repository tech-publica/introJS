const CHARACTER_URL = "https://swapi.dev/api/people/1/";

const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacterAndHomeworld);

function getJson(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      callback(new Error(`HTTP error: ${xhr.status}`));
      return;
    }

    try {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } catch (error) {
      callback(error);
    }
  };

  xhr.onerror = function () {
    callback(new Error("Network error"));
  };

  xhr.send();
}

function loadCharacterAndHomeworld() {
  resetPage();
  addStep("1. Requesting the character...");

  getJson(CHARACTER_URL, function (characterError, character) {
    if (characterError) {
      showError("character", characterError);
      return;
    }

    addStep(`2. Received ${character.name}.`);
    addStep(`3. Requesting ${character.name}'s homeworld...`);

    // This request is nested because its URL comes from the first response.
    getJson(character.homeworld, function (planetError, planet) {
      if (planetError) {
        showError("homeworld", planetError);
        return;
      }

      addStep(`4. Received ${planet.name}.`);
      showResult(character, planet);
    });
  });
}

function resetPage() {
  loadButton.disabled = true;
  status.textContent = "Loading...";
  steps.replaceChildren();
  result.textContent = "Waiting for both requests...";
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}

function showResult(character, planet) {
  loadButton.disabled = false;
  status.textContent = "Finished";
  result.textContent = [
    `Character: ${character.name}`,
    `Homeworld: ${planet.name}`,
    `Climate: ${planet.climate}`,
    `Population: ${planet.population}`,
  ].join("\n");
}

function showError(operation, error) {
  loadButton.disabled = false;
  status.textContent = "Failed";
  result.textContent = `Could not load the ${operation}: ${error.message}`;
}
