const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');

const { uploadBond ,uploadCertficate} = require('../middleware/upload');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const {
  getAllOrder,
  getSingleOrder,
  isActive,
  deleteOrder,
  orderUnderProccessing,
  orderNotCompleted,
  orderCompleted,
  orderUnderImplementing,
  orderUploadCertficate
} = require('../controllers/OrderController');

router.route('/').get(authenticateUser,getAllOrder);
router.route('/order_notCompleted/:id').patch(authenticateUser,orderNotCompleted);
router.route('/order_underProccessing/:id').patch(authenticateUser,orderUnderProccessing);
router.route('/order_underImplementing/:id').patch(authenticateUser,orderUnderImplementing);
router.route('/order_completed/:id').patch(authenticateUser,uploadBond,orderCompleted);
router.route('/order_uploadCertficate/:id').patch(authenticateUser,uploadCertficate,orderUploadCertficate);
router.route('/active/:id').patch(authenticateUser,isActive);
router.route('/:id').get(authenticateUser,getSingleOrder);
router.route('/:id').delete(authenticateUser,deleteOrder);
module.exports = router;
