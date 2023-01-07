const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const { getAllCities, getSingleCity, deleteCity, createCity, updateCity } = require('../controllers/CityController');

router
  .route('/')
  .get(getAllCities)
  .post(authenticateUser,createCity);

router.route('/:id').get(getSingleCity);
router
  .route('/:id')
  .delete(authenticateUser, authorizePermissions(roles.SUPERADMIN, roles.ADMIN), deleteCity)
  .patch(authenticateUser, authorizePermissions(roles.SUPERADMIN, roles.ADMIN), updateCity);

module.exports = router;
