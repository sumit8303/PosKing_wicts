const express = require('express');
const router = express.Router();
const addAddressController = require('../controller/addAddressController.js');

router.post('/employeeAddress', addAddressController.createdaddressDetails)
router.get('/getAllEmployeesAdddress', addAddressController.employAllAddress)
router.delete('/deleteAddAddress/:_id', addAddressController.deleteAddress)
router.get('/viewAddressEmployee/:id', addAddressController.viewEmployeeAddress)
router.put('/updateEmployeeAddress/:_id', addAddressController.updateEmployeeAddress)



module.exports = router