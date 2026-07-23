const users = {
  1: { name: "Ada", favoriteFilmId: 101 },
};

const films = {
  101: { title: "A New Hope" },
  102: { title: "The Empire Strikes Back" },
  103: { title: "Return of the Jedi" },
};

function findValue(collection, id, label) {
  return new Promise(function (resolve, reject) {
    const delay = 300 + Math.random() * 700;

    setTimeout(function () {
      const value = collection[id];

      if (!value) {
        reject(new Error(`${label} ${id} not found`));
        return;
      }

      resolve(value);
    }, delay);
  });
}

function findUser(id) {
  return findValue(users, id, "User");
}

function findFilm(id) {
  return findValue(films, id, "Film");
}

// TODO Task A: load user 1 and then that user's favorite film.


const filmIds = [101, 102, 103];

// TODO Task B: load all three independent films with Promise.all.
