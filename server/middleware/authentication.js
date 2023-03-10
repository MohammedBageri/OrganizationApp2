const CustomError = require('../errors');
const { isTokenValid } = require('../utils');
const Token = require('../models/Token');
const { attachCookiesToResponse } = require('../utils');
const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }
    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });

    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Authentication Invalid');
    }
    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

//---------------------------------------------------------
const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};
//---------------------47-----------------------
// const permissionsUser = (...permissions) => {
//   return async (req, res, next) => {
//     const user = await User.findOne({ _id: req.user.userId });
//     if (!user.permission.includes(permissions)){
//       throw new CustomError.UnauthorizedError('Unauthorized to access this route');
//     }
//     next();
//   };
// };
//--------------------------------------------
const checkAuthenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;

      if (req.user) {
        const payload = isTokenValid(refreshToken);

        const existingToken = await Token.findOne({
          user: payload.user.userId,
          refreshToken: payload.refreshToken,
        });
        attachCookiesToResponse({
          res,
          user: payload.user,
          refreshToken: existingToken.refreshToken,
        });

        req.user = payload.user;
        next();
      }
    } else if (!accessToken) {
      req.user = null;
      return next();
    }
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const permissionsUser = (...permissions) => {
  return async (req, res, next) => {
    if (req.user) {
      const user = await User.findOne({ _id: req.user.userId });
      const result = permissions.some((item) => user.role.includes(item));
      if (!result) {
        throw new CustomError.UnauthorizedError('Unauthorized to access this route');
      }
    }
    next();
  };
};

module.exports = {
  checkAuthenticateUser,
  authenticateUser,
  authorizePermissions,
  permissionsUser,
};
