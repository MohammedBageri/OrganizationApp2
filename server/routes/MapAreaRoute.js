const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const {
  getAllMapAreas,
  getSingleMapArea,
  deleteMapArea,
  createMapArea,
  updateMapArea,
} = require('../controllers/MapAreaController');

router
  .route('/')
  .get(getAllMapAreas)
  .post(authenticateUser,createMapArea);

router.route('/:id').get(getSingleMapArea);
router
  .route('/:id')
  .delete(authenticateUser,deleteMapArea)
  .patch(authenticateUser,updateMapArea);

module.exports = router;
