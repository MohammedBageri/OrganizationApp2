const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions ,permissionsUser} = require('../middleware/authentication');
const { getAllCities, getSingleCity, deleteCity, createCity, updateCity } = require('../controllers/CityController');

router
  .route('/')
  .get(getAllCities)
  .post(authenticateUser,createCity);

router.route('/:id').get(getSingleCity);
router
  .route('/:id')
  .delete(authenticateUser, deleteCity)
  .patch(authenticateUser, updateCity);

module.exports = router;
