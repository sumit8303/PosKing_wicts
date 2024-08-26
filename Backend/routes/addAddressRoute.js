const express = require('express');
const router = express.Router();
const addAddressController = require('../controller/addAddressController.js');

router.post('/employeeAddress/:_id', addAddressController.createdaddressDetails)
router.get('/getAllEmployeesAdddress', addAddressController.employAllAddress)


module.exports = router
