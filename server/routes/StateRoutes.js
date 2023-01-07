const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const {
  getAllStates,
  getSingleState,
  deleteState,
  createState,
  updateState,
} = require('../controllers/StateController');

router
  .route('/')
  .get(getAllStates)
  .post(authenticateUser,createState);

router.route('/:id').get(getSingleState);
router
  .route('/:id')
  .delete(authenticateUser,deleteState)
  .patch(authenticateUser,updateState);

module.exports = router;
