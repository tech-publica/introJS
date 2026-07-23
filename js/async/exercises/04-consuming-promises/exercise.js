function getScore(playerName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ playerName: playerName, score: 7 });
    }, 500);
  });
}

// TODO: build the complete promise chain described in README.md.
getScore("Leia");
