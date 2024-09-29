const express = require('express');
const addCurrencyRoute = require('../controller/SettingCurrency.js')
const router = express.Router();

router.post('/createcurrency', addCurrencyRoute.createCurrency);

router.get('/getcurrency', addCurrencyRoute.GetAllCurrency);

router.delete('/deletecurrency/:_id', addCurrencyRoute.deleteCurrency);

router.get('/viewCurrency/:id', addCurrencyRoute.viewCurrency);

router.put('/updateCurrency/:id', addCurrencyRoute.updateCurrency);

module.exports = router;
