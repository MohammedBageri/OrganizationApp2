const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');
const { getAllNews, getSingleNews, createNews, updateNews, deleteNews } = require('../controllers/NewsController');

router
  .route('/')
  .get(getAllNews)
  .post(
    createNews
  );
router.route('/:id').get(getSingleNews);
router.route('/:id').delete(deleteNews)
  .patch(
    updateNews
  );

module.exports = router;
