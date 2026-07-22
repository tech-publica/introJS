const VALID_URL = "https://swapi.dev/api/people/1/";
const INVALID_URL = "https://swapi.dev/api/people/999999/";
const loadButton = document.getElementById("loadButton");
const outcome = document.getElementById("outcome");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacter);

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

async function loadCharacter() {
  const url = outcome.value === "success" ? VALID_URL : INVALID_URL;

  loadButton.disabled = true;
  outcome.disabled = true;
  status.textContent = "Loading...";
  steps.replaceChildren();
  result.textContent = "Waiting...";

  try {
    addStep("1. Entering try and starting the request");
    const character = await getJson(url);

    addStep("2. The promise fulfilled; execution continues in try");
    status.textContent = "Finished";
    result.textContent = `Character: ${character.name}`;
  } catch (error) {
    addStep("2. The promise rejected; execution jumps to catch");
    status.textContent = "Failed";
    result.textContent = error.message;
  } finally {
    addStep("3. finally runs after either outcome");
    loadButton.disabled = false;
    outcome.disabled = false;
  }
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
  console.log(message);
}
