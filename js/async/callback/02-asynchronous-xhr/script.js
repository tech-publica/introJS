const API_URL = "https://swapi.dev/api/people/1/";

const loadButton = document.getElementById("loadButton");
const counterButton = document.getElementById("counterButton");
const status = document.getElementById("status");
const result = document.getElementById("result");
const clock = document.getElementById("clock");

let count = 0;

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 100);

counterButton.addEventListener("click", function () {
  count += 1;
  counterButton.textContent = `Counter: ${count}`;
});

loadButton.addEventListener("click", loadCharacterAsynchronously);

function loadCharacterAsynchronously() {
  console.log("1. Starting asynchronous request");
  status.textContent = "Loading—the page is still responsive...";
  result.textContent = "Waiting for SWAPI...";
  loadButton.disabled = true;

  const xhr = new XMLHttpRequest();

  // `handleLoad` is a callback. The browser calls it when the response arrives.
  xhr.onload = handleLoad;
  xhr.onerror = handleNetworkError;
  xhr.open("GET", API_URL, true);
  xhr.send();

  console.log("2. Request sent; JavaScript continues immediately");
}

function handleLoad(event) {
  console.log("3. Response received; callback is running");

  const xhr = event.currentTarget;
  loadButton.disabled = false;

  if (xhr.status >= 200 && xhr.status < 300) {
    const character = JSON.parse(xhr.responseText);
    showCharacter(character);
    status.textContent = "Finished";
  } else {
    showError(`HTTP error: ${xhr.status}`);
  }
}

function handleNetworkError() {
  loadButton.disabled = false;
  showError("Network error: SWAPI could not be reached.");
}

function showCharacter(character) {
  result.textContent = [
    `Name: ${character.name}`,
    `Height: ${character.height} cm`,
    `Birth year: ${character.birth_year}`,
  ].join("\n");
}

function showError(message) {
  status.textContent = "Failed";
  result.textContent = message;
}
