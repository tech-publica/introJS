function getScore(playerName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ playerName: playerName, score: 7 });
    }, 500);
  });
}

getScore("Leia")
  .then(function (scoreResult) {
    console.log(`Initial score: ${scoreResult.score}`);
    return scoreResult.score * 2;
  })
  .then(function (doubledScore) {
    console.log(`Doubled score: ${doubledScore}`);

    if (doubledScore < 10) {
      throw new Error("Score is too low");
    }

    return doubledScore;
  })
  .catch(function (error) {
    console.error(error.message);
  })
  .finally(function () {
    console.log("Score check complete");
  });
