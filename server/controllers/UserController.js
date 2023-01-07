const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { createTokenUser, attachCookiesToResponse, checkPermissions } = require('../utils');

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password');
  res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password');
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
  }
  checkPermissions(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};
const updateUser = async (req, res) => {
  const { email, name, username, phone, address } = req.body;
  if (!email || !name || !username || !phone || !address) {
    throw new CustomError.BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.username = username;
  user.phone = phone;
  user.address = address;

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values');
  }
  const user = await User.findOne({ _id: req.user.userId });
  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
};
const createAdmin = async (req, res) => {
  const { email, name, username, phone, address, password ,mapArea ,role} = req.body;
 // const role = 'admin';
  const user = await User.create({ username, name, email, phone, address, password,role,mapArea });
  (user.isVerified = true), (user.verified = Date.now());
  user.verificationToken = '';

  await user.save();
  res.status(StatusCodes.CREATED).json({ user: user });
}; 
const updateUserAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, username, phone, role ,mapArea } = req.body;
  if (!name || !username || !phone  || !role || !mapArea) {
    throw new CustomError.BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new CustomError.NotFoundError(`${id} المستخدم لا يوجد`);
  }

  user.name = name || user.name;
  user.username = username || user.username;
  user.phone = phone ? phone : user.phone;
 // user.address = address ? address : user.address;
  user.role = role || user.role;
  user.mapArea = mapArea || user.mapArea

  const result = await user.save();

  res.status(StatusCodes.OK).json(result);
};

module.exports = {
  createAdmin,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  showCurrentUser,
  updateUserAdmin,
};
