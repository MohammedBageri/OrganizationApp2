const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');

const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const {
  createAdmin,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  showCurrentUser,
  updateUserAdmin,
} = require('../controllers/UserController');

router.route('/').get(authenticateUser, authorizePermissions(roles.SUPERADMIN), getAllUsers);
router.route('/showCurrentUser').get(authenticateUser, showCurrentUser);
router.route('/createAdmin').post(authenticateUser,createAdmin);
router.route('/updateUser').patch(authenticateUser, updateUser);

router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser);

router.route('/updateAdmin/:id').patch( authenticateUser, authorizePermissions(roles.SUPERADMIN), updateUserAdmin);

module.exports = router;
