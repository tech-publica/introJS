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
  // TODO: return a Fetch promise for validated, parsed JSON.
}

function loadCharacterAndHomeworld() {
  prepare("Loading character...");
  let loadedCharacter;

  // TODO: load the character and then the dependent homeworld.
}

function loadCharacters() {
  prepare("Loading three characters...");

  // TODO: start all three requests and combine them with Promise.all.
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
