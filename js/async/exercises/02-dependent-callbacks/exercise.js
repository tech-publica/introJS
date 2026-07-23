const users = {
  1: { name: "Ada", favoriteFilmId: 101 },
  2: { name: "Grace", favoriteFilmId: 102 },
};

const films = {
  101: { title: "A New Hope" },
  102: { title: "The Empire Strikes Back" },
};

function findUser(id, callback) {
  // TODO: after 500 ms, call:
  // callback(null, user) when the user exists, or
  // callback(new Error(`User ${id} not found`)) when it does not.
}

function findFilm(id, callback) {
  // TODO: after 500 ms, deliver the film or a "Film ... not found" Error.
}

function showFavoriteFilm(userId) {
  console.log("Loading user...");

  // TODO:
  // 1. Find the user and handle a possible error.
  // 2. Log the user's name.
  // 3. Find the user's favorite film and handle a possible error.
  // 4. Log the film title.
}

showFavoriteFilm(1);
