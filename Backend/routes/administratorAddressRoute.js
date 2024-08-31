const express = require('express');
const router = express.Router();
const AdministratorAddressDetails = require('../controller/AdministratorAddress.js');


router.post('/administratorAddress', AdministratorAddressDetails.AdministratorAddressDetails)
router.get('/getAllAdminstrator', AdministratorAddressDetails.AdminstratorAllAddress)

module.exports = router