const VALID_URL = "https://swapi.dev/api/people/1/";
const INVALID_URL = "https://swapi.dev/api/people/999999/";
const loadButton = document.getElementById("loadButton");
const outcome = document.getElementById("outcome");
const status = document.getElementById("status");
const steps = document.getElementById("steps");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadMission);

// TODO: make this function async and return validated, parsed JSON.
function getJson(url) {
}

// TODO: make this function async and complete every requirement in README.md.
function loadMission() {
}

function addStep(message) {
  const item = document.createElement("li");
  item.textContent = message;
  steps.appendChild(item);
}
