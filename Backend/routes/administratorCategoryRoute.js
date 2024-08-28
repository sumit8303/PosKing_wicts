const express = require('express');
const router = express.Router();
const administratorCategoryController = require('../controller/administratorCategory.js');

router.post('/saveAdministratorCategory', administratorCategoryController.saveAdministratorCategory)
router.get('/getAllCategory', administratorCategoryController.getAdministratorCategory)


module.exports = router