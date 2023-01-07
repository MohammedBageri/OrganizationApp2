const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const _ = require('lodash');

const getAllCities = async (req, res) => {
  const cities = await CityService.getAllCities();
  res.status(StatusCodes.OK).json(cities);
};
 
const getSingleCity = async (req, res) => {
  const id = req.params.id;
  const city = await CityService.getSingleCity(id);
  res.status(StatusCodes.OK).json(city);
};
 
const createCity = async (req, res) => {
  const city = _.pick(req.body, ['name', 'state']);
  const result = await CityService.createCity(city);
  res.status(StatusCodes.OK).json(result);
};

const updateCity = async (req, res) => {
  const id = req.params.id;
  const city = _.pick(req.body, ['name', 'state']);

  const result = await CityService.updateCity(id, city);
  res.status(StatusCodes.OK).json(result);
};

const deleteCity = async (req, res) => {
  const id = req.params.id;
  
  await CityService.getSingleCity(id);

  const result = await CityService.deleteCity(id);
  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getAllCities,
  getSingleCity,
  deleteCity,
  createCity,
  updateCity,
};
