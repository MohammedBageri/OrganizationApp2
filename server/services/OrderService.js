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

 // const resultObject = {};
  if (result.role.includes(roles.ADMIN)) {
    queryObject.status = 'قيد الإنتظار';
  }
  if (result.role.includes(roles.MANAGER)) {
    queryObject.status = 'قيد التنفيذ';
  }
  if (result.role.includes(roles.ADMIN_2)){
    queryObject.status = 'مرحلة الدفع';
  }
  if (result.role.includes(roles.ADMIN_3)) {
    queryObject.status = 'مكتمل';
  }
  if (result.role.includes(roles.SUPERADMIN)) {
    return await Order.find(queryObject).populate({
      path: 'organization',
      populate: { path: 'mapArea' },
      select: ['nameAr', 'type', 'localOrInternational', 'isActive', 'phone'],
    });
  }
//console.log(queryObject)
  for (var i in organization) {
    queryObject.organization = organization[i];
    const order = await Order.findOne(queryObject).populate({
      path: 'organization',
      populate: { path: 'mapArea' },
      select: ['nameAr', 'type', 'localOrInternational', 'isActive', 'phone'],
    });
    if (order) {
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
  });
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
  const origin = 'http://organization2-admin.novelsoft.com.co';
  const organizationURL = `${origin}/organization/edit/${order.organization}`;

  const messageEn = `<p> Your order is not completed ,Please
  update your organization with correct information by clicking on the following link : 
  <a href="${organizationURL}"> update organization info </a></p>`;

  const messageAr = `<p> عذرا لايمكن إكمال طلبك يرجى قراءة الملاحظات <br> ${note} <br> </p>`;
  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr,
  });

  return await order.remove();
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
  const content = `<h4> Your order under proccessing </h4>`;
  const messageEn = `${content} <p> Information account <br>
   email:${organization.email},password:${generatedPassword}</p> `;

  const messageAr = `<p> لقد تم قبول طلبك </p>`;
  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr,
  });
  const user = await User.findOne({email:organization.email})
  if(!user){
    await User.create({
      username: generateUsernane,
      email: organization.email,
      password: generatedPassword,
      role: roles.USER,
      isVerified: true,
      verified: Date.now(),
      verificationToken: '',
    });  
  }
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

  const messageAr = '<p>يرجى دفع المبلغ المطلوب</p>';

  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr,
  });

  order.status = 'مرحلة الدفع';

  return await order.save();
};
//استكمال معلومات السند + لا ننسى فكرة انه اذا فيه مرفق فايل او لا
const orderCompleted = async (id, bond) => {
  const order = await Order.findOne({ _id: id });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${id}`);
  }
  const organization = await Organization.findOne({ _id: order.organization });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${order.organization}`);
  }
 
  if (bond.file) {
    bond.body.bond = bond.file.path;
  }
  organization.bondNumber = bond.body.bondNumber,
  organization.bondAmount = bond.body.bondAmount,
  organization.bondDate = bond.body.bondDate ,
  organization.bondNote = bond.body.bondNote,
  organization.bond = bond.body.bond

  // await Organization.updateOne(
  //   { _id: order.organization },
  //   {
  //     bond: bond.file.path,
  //     bondNumber:bond.body.bondNumber,
  //     bondAmount:bond.body.bondAmount,
  //     bondDate:bond.body.bondDate ,
  //     bondNote:bond.body.bondNote
  //   },
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );

  const messageEn = `<p> Your order is completed </p>`;
  const messageAr = '<p>طلبك مكتمل</p>';

  await sendEmailOrder({
    email: organization.email,
    messageEn,
    messageAr,
  });

  organization.isActive = 'مرخصة';
  organization.DateisActive = new Date();
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
  if (certficate.file) {
    certficate.body.certficate = certficate.file.path;
  }
  organization.certficate = certficate.body.certficate 
  organization.permitNumber = certficate.body.permitNumber,
  organization.permitDate = certficate.body.permitDate ,
  organization.permitExpireDate = certficate.body.permitExpireDate,
 
  // await Organization.updateOne(
  //   { _id: order.organization },
  //   {
  //     certficate: certficate.body.certficate,
  //     permitNumber:certficate.body.permitNumber,
  //     permitDate:certficate.body.permitDate,
  //     permitExpireDate:certficate.body.permitExpireDate
  //   },
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );
  order.status = 'منتهي';
  await organization.save();
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
//------------------------------------------------
const renewLicense = async (id) => {
  const organization = await Organization.findOne({ _id: id });
  if (!organization) {
    throw new CustomError.NotFoundError(`No organization with id : ${id}`);
  }
  if(organization.isActive === 'مرخصة'){
    return 'organization is already active'
  }
  await Order.create({
    organization: organization._id,
    status: 'قيد الإنتظار',
    type:'تجديد الترخيص'
  });
  const message = 'طلبك قيد الإنتظار';
  return message;
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
  renewLicense,
};
