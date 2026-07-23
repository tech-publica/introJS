const API_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacter);

function loadCharacter() {
  loadButton.disabled = true;
  status.textContent = "Loading...";
  result.textContent = "Waiting for SWAPI...";

  const responsePromise = fetch(API_URL);
  console.log("fetch returned immediately:", responsePromise);

  responsePromise
    .then(function (response) {
      console.log("The response arrived:", response);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const jsonPromise = response.json();
      console.log("response.json returned:", jsonPromise);
      return jsonPromise;
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
