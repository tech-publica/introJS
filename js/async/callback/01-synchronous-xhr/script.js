const API_URL = "https://swapi.dev/api/people/1/";

const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const result = document.getElementById("result");
const clock = document.getElementById("clock");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 100);

loadButton.addEventListener("click", loadCharacterSynchronously);

function loadCharacterSynchronously() {
  console.log("1. Starting synchronous request");
  status.textContent = "Loading—the page is blocked while we wait...";
  result.textContent = "Waiting for SWAPI...";

  const xhr = new XMLHttpRequest();

  try {
    // false makes this request synchronous. Do not use this in real applications.
    xhr.open("GET", API_URL, false);
    xhr.send();

    console.log("2. send() finished; JavaScript can continue");

    if (xhr.status >= 200 && xhr.status < 300) {
      const character = JSON.parse(xhr.responseText);
      showCharacter(character);
      status.textContent = "Finished";
    } else {
      showError(`HTTP error: ${xhr.status}`);
    }
  } catch (error) {
    showError(`Request failed: ${error.message}`);
  }

  console.log("3. End of click handler");
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

