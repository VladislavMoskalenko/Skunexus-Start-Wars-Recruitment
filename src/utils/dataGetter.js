import request from "./request";
import * as mappers from "./dataMapper";

const trimPage = (url) => url.split("?page=")[1];

const getDataWithPagination = async (path, page, mapper) => {
  const params = {};
  if (page) {
    params.page = page;
  }
  const res = await request({ path, options: { params } });
  const current = res.data.next
    ? Number(trimPage(res.data.next)) - 1
    : Number(trimPage(res.data.previous)) + 1;
  const pagination = {
    current,
    pageSize: res.data.results.length,
    total: res.data.count,
  };
  const data = await mapper(res.data.results);
  return { data, pagination };
};

const getDataFromParentResource = async (parentResourcePath, instanceField) => {
  const result = [];
  const parentResourceResponse = await request({ path: parentResourcePath });
  const instancePromises = [];
  parentResourceResponse.data[instanceField].forEach((instanceUrl) => {
    instancePromises.push(
      request({ url: instanceUrl }).then((response) =>
        result.push(response.data)
      )
    );
  });
  await Promise.all(instancePromises);
  return result;
};

export const planet = async ({ id, filmId, personId, page }) => {
  let data = [];
  if (!id && !filmId && !personId) {
    return getDataWithPagination("/planets/", page, mappers.planet);
  }
  if (id) {
    const res = await request({ path: `/planets/${id}/` });
    data.push(res.data);
  }
  if (filmId) {
    const filmPlanets = await getDataFromParentResource(
      `/films/${filmId}/`,
      "planets"
    );
    data.push(...filmPlanets);
  }
  if (personId) {
    const personPlanets = await getDataFromParentResource(
      `/people/${personId}/`,
      "planets"
    );
    data.push(...personPlanets);
  }
  return { data: mappers.planet(data) };
};

export const person = async ({ filmId, planetId, page }) => {
  if (!filmId && !planetId) {
    return getDataWithPagination("/people/", page, mappers.person);
  }
  const data = [];
  if (filmId) {
    const filmCharacters = await getDataFromParentResource(
      `/films/${filmId}/`,
      "characters"
    );
    data.push(...filmCharacters);
  }
  if (planetId) {
    const planetResidents = await getDataFromParentResource(
      `/planets/${planetId}/`,
      "residents"
    );
    data.push(...planetResidents);
  }
  return { data: await mappers.person(data) };
};

export const film = async ({ planetId, page, personId }) => {
  if (!planetId && !personId) {
    return getDataWithPagination("/films/", page, mappers.film);
  }
  const data = [];
  if (planetId) {
    const planetFilms = await getDataFromParentResource(
      `/planets/${planetId}/`,
      "films"
    );
    data.push(...planetFilms);
  }
  if (personId) {
    const personFilms = await getDataFromParentResource(
      `/people/${personId}/`,
      "films"
    );
    data.push(...personFilms);
  }
  return { data: mappers.film(data) };
};
