const express = require('express');
const router = express.Router();
const addSettingCountry = require('../controller/SettingCountry.js');


router.post('/createCountry', addSettingCountry.createCountry);

router.delete('/deletecountry/:_id', addSettingCountry.deleteCountry);

router.get('/getallcountry', addSettingCountry.GetAllCountry);

router.put('/updateCountry/:id', addSettingCountry.updateCountry);

router.get('/viewCountry/:id', addSettingCountry.viewCountry);



module.exports = router