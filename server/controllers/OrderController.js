const { StatusCodes } = require('http-status-codes');
const { OrderService } = require('../services');
const _ = require('lodash');

const getAllOrder = async (req, res) => {
  const user = req.user.userId;
  const { status } = req.query;
  const queryObject = {};
  if (status) {
    queryObject.status = status;
  }

  let orders = await OrderService.getAllOrder(user,queryObject);
  res.status(StatusCodes.OK).json(orders);
};
const getSingleOrder = async (req, res) => {
  const id = req.params.id;
  const order = await OrderService.getSingleOrder(id);
  res.status(StatusCodes.OK).json(order);
};
const orderNotCompleted = async (req, res) => {
  const id = req.params.id;
  const note = req.body.note;

  const order = await OrderService.orderNotCompleted(id, note);
  res.status(StatusCodes.OK).json(order);
};
const orderUnderProccessing = async (req, res) => {
  const id = req.params.id;
  const order = await OrderService.orderUnderProccessing(id);
  res.status(StatusCodes.OK).json(order);
};
const orderUnderImplementing = async (req, res) => {
  const id = req.params.id;
  const order = await OrderService.orderUnderImplementing(id);
  res.status(StatusCodes.OK).json(order);
};
const orderCompleted = async (req, res) => {
  const id = req.params.id;
  const order = await OrderService.orderCompleted(id, req);

  res.status(StatusCodes.OK).json(order);
};
const orderUploadCertficate = async (req, res) => {
  const id = req.params.id;
  const order = await OrderService.orderUploadCertficate(id, req);

  res.status(StatusCodes.OK).json(order);
};
const isActive = async (req, res) => {
  const { id } = req.params;

  const result = await OrderService.isActive(id);

  res.status(StatusCodes.OK).json(result);
};
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  const order = await OrderService.deleteOrder(id);

  res.status(StatusCodes.OK).json(order);
};

module.exports = {
  getAllOrder,
  getSingleOrder,
  isActive,
  deleteOrder,
  orderUnderProccessing,
  orderNotCompleted,
  orderUnderImplementing,
  orderCompleted,
  orderUploadCertficate,
};
