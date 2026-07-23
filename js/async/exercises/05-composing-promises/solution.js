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

findUser(1)
  .then(function (user) {
    console.log(`User: ${user.name}`);
    return findFilm(user.favoriteFilmId);
  })
  .then(function (film) {
    console.log(`Favorite film: ${film.title}`);
  })
  .catch(function (error) {
    console.error(error.message);
  });

const filmIds = [101, 102, 103];
const filmPromises = filmIds.map(function (id) {
  return findFilm(id);
});

Promise.all(filmPromises)
  .then(function (loadedFilms) {
    const titles = loadedFilms.map(function (film) {
      return film.title;
    });
    console.log("All films:", titles.join(", "));
  })
  .catch(function (error) {
    console.error(error.message);
  });
