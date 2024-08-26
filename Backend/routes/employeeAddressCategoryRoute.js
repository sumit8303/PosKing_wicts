const express = require('express');
const router = express.Router();
const addressCategoryController = require('../controller/employeeAddressCategoryController.js');


router.post('/saveAddressCategory', addressCategoryController.saveAddressCategory)
router.get('/getAllCategory', addressCategoryController.getAdressCategory)


module.exports = router