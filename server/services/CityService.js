const City = require('../models/City');
const State = require('../models/State');
const CustomError = require('../errors');

const getAllCities = async () => {
  return await City.find().populate({ path: 'state' });
};

const getSingleCity = async (id) => {
  const city = await City.findOne({ _id: id }).populate({ path: 'state' });
  if (!city) throw new CustomError.NotFoundError(`No city with id : ${id}`);
  return city;
};

const createCity = async (city) => {
  const { error } = City.schemaValidator(city);
  if (error) throw new CustomError.BadRequestError(error);

  const state = await State.findOne({ _id: city.state });
  if (!state) throw new CustomError.NotFoundError(`No state with id : ${city.state}`);

  const newCity = new City(city);
  return await newCity.save();
};

const updateCity = async (id, updateCity) => {
  const { error } = City.schemaValidator(updateCity);
  if (error) throw new CustomError.BadRequestError(error);

  const city = await City.findOne({ _id: id });
  if (!city) throw new CustomError.NotFoundError(`No city with id : ${id}`);

  const state = await State.findOne({ _id: updateCity.state });
  if (!state) throw new CustomError.NotFoundError(`No state with id : ${city.state}`);

  city.name = updateCity.name;
  city.state = updateCity.state;

  return await city.save();
};

const deleteCity = async (id) => {
  return await City.deleteOne({ _id: id });
};

module.exports = {
  getAllCities,
  getSingleCity,
  deleteCity,
  createCity,
  updateCity,
};
