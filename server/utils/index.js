const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const {checkPermissions,checkUserPermissions} = require('./checkPermissions');
const createHash = require('./createHash');
const sendVerificationEmail = require('./sendVerificationEmail');
const sendResetPasswordEmail = require('./sendResetPasswordEmail');
const sendEmailOrder = require('./sendEmailOrder');

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
  createHash,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendEmailOrder,
  checkUserPermissions
  
};
