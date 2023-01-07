const { StatusCodes } = require('http-status-codes');
const { StateService } = require('../services');
const _ = require('lodash');

const getAllStates = async (req, res) => {
  const states = await StateService.getAllStates();
  res.status(StatusCodes.OK).json(states);
};

const getSingleState = async (req, res) => {
  const id = req.params.id;
  const state = await StateService.getSingleState(id);
  res.status(StatusCodes.OK).json(state);
};

const createState = async (req, res) => {
  const state = _.pick(req.body, ['name']);

  const result = await StateService.createState(state);
  res.status(StatusCodes.CREATED).json(result);
};

const updateState = async (req, res) => {
  const id = req.params.id;
  const state = _.pick(req.body, ['name']);

  const result = await StateService.updateState(id, state);
  res.status(StatusCodes.OK).json(result);
};

const deleteState = async (req, res) => {
  const { id } = req.params;
  const result = await StateService.deleteState(id);
  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getAllStates,
  getSingleState,
  deleteState,
  createState,
  updateState,
};
