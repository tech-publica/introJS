const API_URL = "https://swapi.dev/api/people/1/";
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");

loadButton.addEventListener("click", loadCharacter);

function getJson(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

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

function loadCharacter() {
  status.textContent = "Loading...";
  result.textContent = "Waiting for SWAPI...";
  loadButton.disabled = true;

  const characterPromise = getJson(API_URL);
  console.log("getJson returned immediately:", characterPromise);

  characterPromise
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
