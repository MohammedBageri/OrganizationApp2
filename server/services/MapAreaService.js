const MapArea = require('../models/MapArea');
const CustomError = require('../errors');

const getAllMapAreas = async () => {
  return await MapArea.find({});
};

const getSingleMapArea = async (id) => {
  const mapArea = await MapArea.findOne({ _id: id });
  if (!mapArea) {
    throw new CustomError.NotFoundError(`No MapArea with id : ${id}`);
  }
  return mapArea;
};

const createMapArea = async (mapArea) => {
  const { error } = MapArea.schemaValidator(mapArea);
  if (error) {
    throw new CustomError.BadRequestError(error);
  }
  return await MapArea.create(mapArea);
};

const updateMapArea = async (id, updateMapArea) => {
  const { error } = MapArea.schemaValidator(updateMapArea);
  if (error) {
    throw new CustomError.BadRequestError(error);
  }
  const mapArea = await MapArea.findOne({ _id: id });
  if (!mapArea) {
    throw new CustomError.NotFoundError(`No MapArea with id : ${id}`);
  }

  mapArea.name = updateMapArea.name;
  return await mapArea.save();
};

const deleteMapArea = async (id) => {
  const mapArea = await MapArea.findOne({ _id: id });

  if (!mapArea) {
    throw new CustomError.NotFoundError(`No MapArea with id : ${id}`);
  }
  return await mapArea.remove();
};

module.exports = {
  getAllMapAreas,
  getSingleMapArea,
  deleteMapArea,
  createMapArea,
  updateMapArea,
};
