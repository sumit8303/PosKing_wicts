const express = require('express');
const router = express.Router();
const addCustomerAddress = require('../controller/customerAddress.js');


router.post('/customerAddress', addCustomerAddress.customerAddAddress)
router.get('/getCustomerAddress', addCustomerAddress.getCustomerAddress)
router.delete('/deleteCustomerAddress/:_id', addCustomerAddress.deleteCustomerAddress)
router.get('/viewCustomerEmployee/:id', addCustomerAddress.viewCustomerAddress)
router.put('/updateCustomerAddress/:_id', addCustomerAddress.updateCustomerAddress)




module.exports = router