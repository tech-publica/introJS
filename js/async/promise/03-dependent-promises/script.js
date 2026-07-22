const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacterAndHomeworld);

function getJson(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(`HTTP error: ${xhr.status}`));
        return;
      }

      try {
        resolve(JSON.parse(xhr.responseText));
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error"));
    };

    xhr.send();
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

      // Returning this promise connects the two asynchronous operations.
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
