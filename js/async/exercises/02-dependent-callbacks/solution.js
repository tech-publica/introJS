const users = {
  1: { name: "Ada", favoriteFilmId: 101 },
  2: { name: "Grace", favoriteFilmId: 102 },
};

const films = {
  101: { title: "A New Hope" },
  102: { title: "The Empire Strikes Back" },
};

function findUser(id, callback) {
  setTimeout(function () {
    const user = users[id];

    if (!user) {
      callback(new Error(`User ${id} not found`));
      return;
    }

    callback(null, user);
  }, 500);
}

function findFilm(id, callback) {
  setTimeout(function () {
    const film = films[id];

    if (!film) {
      callback(new Error(`Film ${id} not found`));
      return;
    }

    callback(null, film);
  }, 500);
}

function showFavoriteFilm(userId) {
  console.log("Loading user...");

  findUser(userId, function (userError, user) {
    if (userError) {
      console.error(userError.message);
      return;
    }

    console.log(`User: ${user.name}`);
    console.log("Loading favorite film...");

    findFilm(user.favoriteFilmId, function (filmError, film) {
      if (filmError) {
        console.error(filmError.message);
        return;
      }

      console.log(`Favorite film: ${film.title}`);
    });
  });
}

showFavoriteFilm(1);
