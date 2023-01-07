const State = require('../models/State');
const City = require('../models/City');
const CustomError = require('../errors');

const getAllStates = async () => {
  return await State.find({}).populate('cities');
};

const getSingleState = async (id) => {
  const state = await State.findOne({ _id: id }).populate('cities');

  if (!state) {
    throw new CustomError.NotFoundError(`No state with id : ${id}`);
  }
  return state;
};

const createState = async (state) => {
  const { error } = State.schemaValidator(state);
  if (error) {
    throw new CustomError.BadRequestError(error);
  }

  return await State.create(state);
};

const updateState = async (id, updateState) => {
  const { error } = State.schemaValidator(updateState);
  if (error) {
    throw new CustomError.BadRequestError(error);
  }
  const state = await State.findOne({ _id: id });
  if (!state) {
    throw new CustomError.NotFoundError(`No state with id : ${id}`);
  }

  state.name = updateState.name;
  return await state.save();
};

const deleteState = async (id) => {
  const state = await State.findOne({ _id: id });

  const city = await City.findOne({ state: id });
  if (!state) {
    throw new CustomError.NotFoundError(`No state with id : ${id}`);
  }

  if (city == null) {
    await state.remove();
  } else {
    await City.deleteOne(city);
  }

  return await state.delete();
};

module.exports = {
  getAllStates,
  getSingleState,
  deleteState,
  createState,
  updateState,
};
