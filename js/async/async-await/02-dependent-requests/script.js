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
