const express = require('express');
const router = express.Router();
const AdministratorAddressDetails = require('../controller/AdministratorAddress.js');


router.post('/administratorAddress', AdministratorAddressDetails.AdministratorAddressDetails)
router.get('/getAllAdminstratorAddress', AdministratorAddressDetails.AdminstratorAllAddress)
router.delete('/deleteAdministratorAddress/:_id', AdministratorAddressDetails.deleteAdministratorAddress)
router.get('/viewAdministratorAddress/:id', AdministratorAddressDetails.viewAdministratorAddress)
router.put('/UpdateAdministratorAddress/:_id', AdministratorAddressDetails.updateAdministratorAddress)
module.exports = router