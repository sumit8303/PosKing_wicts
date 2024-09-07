const express = require('express');
const addCityRoute = require('../controller/SettingCity.js')
const router = express.Router();

router.post('/createCity', addCityRoute.createCity);

router.get('/getAllCity', addCityRoute.GetAllCity);

router.delete('/deletecity', addCityRoute.deleteCity);




module.exports = router;
