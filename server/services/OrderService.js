const Order = require('../models/Order');
const Organization = require('../models/Organization');
const User = require('../models/User');
const CustomError = require('../errors');
const { sendEmailOrder } = require('../utils');
const roles = require('../utils/roles');
const { generateFromEmail } = require('unique-username-generator');
const removeFileIfExist = require('../utils/removeFileIfExist');
const getAllOrder = async (user, queryObject) => {

  const result = await User.findOne({ _id: user });
  const orderList = [];
  const organization = await Organization.find({ mapArea: result.mapArea });
  const organizationAdmin = await Organization.find({});
  
  const resultObject = {};
 // resultObject.status = queryObject.status;
  if(result.role == roles.ADMIN){
    resultObject.status = 'قيد الإنتظار';
  }
  if(result.role == roles.MANAGER){
    resultObject.status = 'قيد التنفيذ';
  }
  if(result.role == roles.ADMIN_2){
    resultObject.status = 'مرحلة الدفع';
  }
  if(result.role == roles.ADMIN_3){
    resultObject.status = 'مكتمل';
  }
  if(result.role ==roles.SUPERADMIN){
    return await Order.find(queryObject).populate({
      path: 'organization',
      populate: { path: 'mapArea' },
      select: ['nameAr', 'type', 'localOrInternational', 'isActive', 'phone'],
    });
  }
  for (var i in organization) {
    resultObject.organization = organization[i];
    const order = await Order.findOne(resultObject).populate({
      path: 'organization',
      populate: { path: 'mapArea' },
      select: ['nameAr', 'type', 'localOrInternational', 'isActive', 'phone'],
    });

   if(order){
    orderList.push(order);
   }
  }
  return orderList;
};
const getSingleOrder = async (id) => {
  const order = await Order.findOne({ _id: id }).populate({
    path: 'organization',
    populate: { path: 'mapArea' },
    select: ['nameAr', 'type', 'localOrInternational', 'isActive', 'phone'],
  });;
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  return order;
};
const orderNotCompleted = async (id, note) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }
  const origin = 'http://localhost:3000';
  const organizationURL = `${origin}/api/Organizations/updateOrganization?id=${order.organization}`;

  const messageEn = `<p> Your order is not completed ,Please
  update your organization with correct information by clicking on the following link : 
  <a href="${organizationURL}"> update organization info </a></p>`;

  const messageAr = `<p> <br> ${note} <br> عذرا لايمكن إكمال طلبك يرجى قراءة الملاحظات </p>`
  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr
  });

  return order;
};
const orderUnderProccessing = async (id) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }

  const generateUsernane = generateFromEmail(organization.email, 3);
  const generatedPassword = generateFromEmail(organization.email, 5);

  await User.create({
    username: generateUsernane,
    email: organization.email,
    password: generatedPassword,
    role: roles.USER,
    isVerified: true,
    verified: Date.now(),
    verificationToken: '',
  });
  const content = `<h4> Your order under proccessing </h4>`;

  const messageEn = `${content} <p> Information account <br>
   email:${organization.email},password:${generatedPassword}</p> `;

  const messageAr = `<p> لقد تم قبول طلبك </p>`
  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr
  });
  order.status = 'قيد التنفيذ';

  return await order.save();
};
const orderUnderImplementing = async (id) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }
  const messageEn = `<p> Your order is under implementing ,
  Please pay the required amount to confirm your order </p>`;

  const messageAr ='<p>يرجى دفع المبلغ المطلوب</p>'

  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr
  });

  order.status = 'مرحلة الدفع';

  return await order.save();
};
const orderCompleted = async (id, bond) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }
  removeFileIfExist(organization.bond);
  await Organization.updateOne(
    { _id: order.organization },
    {
      bond: bond.file.path,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  const messageEn = `<p> Your order is completed </p>`;
  const messageAr = '<p>طلبك مكتمل</p>'

  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr
  });

  organization.isActive = 'مرخصة';
  order.status = 'مكتمل';
  await organization.save();
  return await order.save();
};
const orderUploadCertficate = async (id, certficate) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }
  removeFileIfExist(organization.certficate);
  await Organization.updateOne(
    { _id: order.organization },
    {
      certficate: certficate.file.path,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  order.status = 'منتهي';
  await order.save();
  return await Organization.findOne({ _id: order.organization });
};
const isActive = async (id) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No Organization with id : ${id}`);
  }
  organization.isActive = 'مرخصة';
  organization.DateisActive = new Date();
  return await Organization.updateOne({ _id: organization._id }, organization, {
    new: true,
    runValidators: true,
  });
};
const deleteOrder = async (id) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  return await order.remove();
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
