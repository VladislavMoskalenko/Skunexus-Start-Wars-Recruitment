import request from "./request";

const trimId = (url) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 2];
};

export const planet = (items) => {
  return items.map((planet) => ({ ...planet, id: trimId(planet.url) }));
};

export const person = async (items) => {
  const promises = [];
  items.forEach((person) => {
    promises.push(
      request({ url: person.homeworld }).then((response) => {
        person.id = trimId(person.url);
        person.homeworld = {
          id: trimId(person.homeworld),
          name: response.data.name,
        };
      })
    );
  });
  await Promise.all(promises);
  return items;
};

export const film = (items) => {
  return items.map((film) => ({ ...film, id: trimId(film.url) }));
};
