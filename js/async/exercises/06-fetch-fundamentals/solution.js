const CHARACTER_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacter);

function loadCharacter() {
  loadButton.disabled = true;
  status.textContent = "Loading...";
  result.textContent = "Waiting...";

  fetch(CHARACTER_URL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then(function (character) {
      status.textContent = "Finished";
      result.textContent = [
        `Name: ${character.name}`,
        `Height: ${character.height} cm`,
        `Birth year: ${character.birth_year}`,
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
