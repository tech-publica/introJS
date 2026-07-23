const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const CHARACTER_URLS = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
  "https://swapi.dev/api/people/3/",
];
const dependentButton = document.getElementById("dependentButton");
const parallelButton = document.getElementById("parallelButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

dependentButton.addEventListener("click", loadCharacterAndHomeworld);
parallelButton.addEventListener("click", loadCharacters);

function getJson(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  });
}

function loadCharacterAndHomeworld() {
  prepare("Loading character...");
  let loadedCharacter;

  getJson(CHARACTER_URL)
    .then(function (character) {
      loadedCharacter = character;
      status.textContent = "Loading homeworld...";
      return getJson(character.homeworld);
    })
    .then(function (planet) {
      status.textContent = "Finished";
      result.textContent = [
        `Character: ${loadedCharacter.name}`,
        `Homeworld: ${planet.name}`,
      ].join("\n");
    })
    .catch(showError)
    .finally(finish);
}

function loadCharacters() {
  prepare("Loading three characters...");

  const characterPromises = CHARACTER_URLS.map(function (url) {
    return getJson(url);
  });

  Promise.all(characterPromises)
    .then(function (characters) {
      status.textContent = "Finished";
      result.textContent = characters
        .map(function (character) {
          return character.name;
        })
        .join("\n");
    })
    .catch(showError)
    .finally(finish);
}

function prepare(message) {
  dependentButton.disabled = true;
  parallelButton.disabled = true;
  status.textContent = message;
  result.textContent = "Waiting...";
}

function showError(error) {
  status.textContent = "Failed";
  result.textContent = error.message;
}

function finish() {
  dependentButton.disabled = false;
  parallelButton.disabled = false;
}
