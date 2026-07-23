const VALID_URL = "https://swapi.dev/api/people/1/";
const INVALID_URL = "https://swapi.dev/api/people/999999/";
const loadButton = document.getElementById("loadButton");
const outcome = document.getElementById("outcome");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadMission);

async function getJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

async function loadMission() {
  const characterUrl = outcome.value === "success" ? VALID_URL : INVALID_URL;

  loadButton.disabled = true;
  outcome.disabled = true;
  status.textContent = "Loading...";
  steps.replaceChildren();
  result.textContent = "Waiting...";

  try {
    addStep("1. Requesting the character");
    const character = await getJson(characterUrl);

    addStep(`2. Received ${character.name}`);
    addStep("3. Requesting the dependent homeworld");
    const planet = await getJson(character.homeworld);

    addStep(`4. Received ${planet.name}`);
    addStep("5. Starting three independent film requests");
    const filmPromises = character.films.slice(0, 3).map(function (url) {
      return getJson(url);
    });
    const films = await Promise.all(filmPromises);

    addStep("6. Received all three films");
    status.textContent = "Finished";
    result.textContent = [
      `Character: ${character.name}`,
      `Homeworld: ${planet.name}`,
      "Films:",
      ...films.map(function (film) {
        return `- ${film.title}`;
      }),
    ].join("\n");
  } catch (error) {
    addStep("The operation failed");
    status.textContent = "Failed";
    result.textContent = error.message;
  } finally {
    loadButton.disabled = false;
    outcome.disabled = false;
  }
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
}
