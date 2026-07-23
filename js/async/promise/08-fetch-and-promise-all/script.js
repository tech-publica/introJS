const URLS = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
  "https://swapi.dev/api/people/3/",
];
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacters);

function getJson(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  });
}

function loadCharacters() {
  loadButton.disabled = true;
  status.textContent = "Loading all three...";
  result.textContent = "Waiting...";

  const characterPromises = URLS.map(function (url) {
    return getJson(url);
  });

  Promise.all(characterPromises)
    .then(function (characters) {
      status.textContent = "Finished";
      result.textContent = characters
        .map(function (character, index) {
          return `${index + 1}. ${character.name}`;
        })
        .join("\n");
    })
    .catch(function (error) {
      status.textContent = "Failed";
      result.textContent = error.message;
    })
    .finally(function () {
      loadButton.disabled = false;
    });
}
