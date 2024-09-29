const express = require('express');
const addCityRoute = require('../controller/SettingCity.js')
const router = express.Router();

router.post('/createCity', addCityRoute.createCity);

router.get('/getAllCity', addCityRoute.GetAllCity);

router.delete('/deleteCity/:_id', addCityRoute.deleteCity);

router.put('/updateCity/:id', addCityRoute.updateCity);

router.get('/viewCity/:id', addCityRoute.viewCity);




module.exports = router;
