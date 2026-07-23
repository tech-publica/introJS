const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacter);

function loadCharacter() {
  loadButton.disabled = true;
  status.textContent = "Loading...";
  result.textContent = "Waiting...";

  // TODO: build the Fetch promise chain described in README.md.
}
