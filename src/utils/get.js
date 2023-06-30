/**
 * description : get all data from a json file.
 * @param {string} url - url of the json file.
 * @returns {Promise<Object[]>} - data from the json file.
 * @example getData("/data.json") => { "data": [ { "id": 1, "name": "name1" }, { "id": 2, "name": "name2" } ] }
 */
const getData = async (url) => {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  }
};

/**
 * description : get data from a json file by property.
 * @param {string} url - url of the json file.
 * @param {string} property - property of the json file.
 * @returns {Promise<Object[]>} - data from the json file.
 * @example getDataByProperty("/data.json", "data") => [ { "id": 1, "name": "name1" }, { "id": 2, "name": "name2" } ]
 */
const getDataByProperty = async (url, property) => {
  try {
    const data = await getData(url);
    const dataByProperty = data[property];
    return dataByProperty;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  }
};

/**
 * description : get data from a json file by id.
 * @param {string} url - url of the json file.
 * @param {number} id - id of the data.
 * @returns {Promise<Object[]>} - data from the json file.
 * @example getDataById("/data.json", 1) => { "id": 1, "name": "name1" }
 */
const getDataById = async (url, id) => {
  try {
    const data = await getData(url);
    const dataById = data.find((item) => item.id === id);
    return dataById;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  }
};

export { getData, getDataByProperty, getDataById };
