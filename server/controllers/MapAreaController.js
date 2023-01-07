const { StatusCodes } = require('http-status-codes');
const { MapAreaService } = require('../services');
const _ = require('lodash');

const getAllMapAreas = async (req, res) => {
  const mapAreas = await MapAreaService.getAllMapAreas();
  res.status(StatusCodes.OK).json(mapAreas);
};

const getSingleMapArea = async (req, res) => {
  const id = req.params.id;
  const mapArea = await MapAreaService.getSingleMapArea(id);
  res.status(StatusCodes.OK).json(mapArea);
};

const createMapArea = async (req, res) => {
  const mapArea = _.pick(req.body, ['name']);

  const result = await MapAreaService.createMapArea(mapArea);
  res.status(StatusCodes.CREATED).json(result);
};

const updateMapArea = async (req, res) => {
  const id = req.params.id;
  const mapArea = _.pick(req.body, ['name']);

  const result = await MapAreaService.updateMapArea(id, mapArea);
  res.status(StatusCodes.OK).json(result);
};

const deleteMapArea = async (req, res) => {
  const { id } = req.params;
  const result = await MapAreaService.deleteMapArea(id);
  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getAllMapAreas,
  getSingleMapArea,
  deleteMapArea,
  createMapArea,
  updateMapArea,
};
